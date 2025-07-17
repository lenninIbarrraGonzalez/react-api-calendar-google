import { useSelector } from 'react-redux';
import type { RootState } from '../../store/store';
import { Calendar as BigCalendar, momentLocalizer, Views } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useState } from 'react';

moment.locale("en-GB");
const localizer = momentLocalizer(moment);

const allViews = Object.values(Views);

export const CalendarPage = () => {
  const { calendarEvents } = useSelector((state: RootState) => state.calendar);
  const [currentDate, setCurrentDate] = useState(new Date());
  
  // Transformar los eventos de Google Calendar para que sean compatibles con react-big-calendar
  const transformedEvents = calendarEvents.map(event => {
    // Manejo de fechas para eventos de Google Calendar
    let startDate, endDate;
    
    if (event.start) {
      // Si tiene dateTime, es un evento con hora específica
      if (event.start.dateTime) {
        startDate = new Date(event.start.dateTime);
      } 
      // Si solo tiene date, es un evento de todo el día
      else if (event.start.date) {
        startDate = new Date(event.start.date);
      }
    }
    
    if (event.end) {
      if (event.end.dateTime) {
        endDate = new Date(event.end.dateTime);
      } else if (event.end.date) {
        endDate = new Date(event.end.date);
      }
    }
    
    // Si no hay fechas definidas, usar la fecha actual
    if (!startDate) startDate = new Date();
    if (!endDate) endDate = new Date(startDate.getTime() + 60 * 60 * 1000); // 1 hora después
    
    return {
      id: event.id,
      title: event.summary || 'Sin título',
      start: startDate,
      end: endDate,
      allDay: !event.start?.dateTime, // Si no tiene dateTime, es todo el día
      resource: {
        status: event.status,
        htmlLink: event.htmlLink,
        created: event.created,
        updated: event.updated,
        etag: event.etag,
        iCalUID: event.iCalUID,
        eventType: event.eventType,
        ...(event.description && { description: event.description }),
        ...(event.location && { location: event.location }),
        ...(event.creator && { creator: event.creator }),
        ...(event.attendees && { attendees: event.attendees }),
      },
    };
  });

  // Manejador para cuando se selecciona un evento
  const handleSelectEvent = (event: any) => {
    console.log('Evento seleccionado:', event);
    console.log('Datos del evento de Google:', event.resource);
    // Aquí puedes abrir un modal con toda la información del evento
    // Tienes acceso a: status, htmlLink, created, updated, etc.
  };

  // Manejador para cuando se selecciona un slot de tiempo
  const handleSelectSlot = (slotInfo: any) => {
    console.log('Slot seleccionado:', slotInfo);
    // Aquí puedes abrir un modal para crear un nuevo evento
  };

  // Manejador para el botón "Show More"
  const handleShowMore = (events: any[], date: Date) => {
    console.log('Show more clicked:', events, date);
    // Implementar lógica para mostrar más eventos en un modal
  };

  // Manejador para la navegación del calendario
  const handleNavigate = (newDate: Date) => {
    setCurrentDate(newDate);
  };

  // Manejador para cambiar de vista
  const handleViewChange = (newView: string) => {
    console.log('Vista cambiada a:', newView);
  };

  // Configuración de formatos de fecha personalizados (opcional)
  const formats = {
    monthHeaderFormat: 'MMMM YYYY',
    dayHeaderFormat: 'dddd DD/MM',
    dayRangeHeaderFormat: ({ start, end }: { start: Date; end: Date }) => 
      `${moment(start).format('DD/MM')} - ${moment(end).format('DD/MM/YYYY')}`,
    timeGutterFormat: 'HH:mm',
    eventTimeRangeFormat: ({ start, end }: { start: Date; end: Date }) => 
      `${moment(start).format('HH:mm')} - ${moment(end).format('HH:mm')}`,
  };

  // Componente personalizado para mostrar eventos
  const CustomEvent = ({ event }: { event: any }) => {
    const getStatusColor = (status: string) => {
      switch (status) {
        case 'confirmed': return '#4caf50';
        case 'tentative': return '#ff9800';
        case 'cancelled': return '#f44336';
        default: return '#2196f3';
      }
    };

    return (
      <div style={{ 
        fontSize: '12px', 
        padding: '2px 4px',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        borderLeft: `3px solid ${getStatusColor(event.resource?.status)}`,
        paddingLeft: '6px'
      }}>
        <strong>{event.title}</strong>
        {event.resource?.location && (
          <div style={{ fontSize: '10px', opacity: 0.8 }}>
            📍 {event.resource.location}
          </div>
        )}
        {event.resource?.status === 'tentative' && (
          <div style={{ fontSize: '10px', opacity: 0.8 }}>
            ⏳ Tentativo
          </div>
        )}
      </div>
    );
  };

  return (
    <div style={{ height: 700, padding: '20px' }}>
      <BigCalendar
        localizer={localizer}
        events={transformedEvents}
        startAccessor="start"
        endAccessor="end"
        titleAccessor="title"
        allDayAccessor="allDay"
        resourceAccessor="resource"
        step={60}
        showMultiDayTimes={true}
        views={allViews}
        defaultView={Views.MONTH}
        date={currentDate}
        onNavigate={handleNavigate}
        onView={handleViewChange}
        popup={true}
        selectable={true}
        onSelectEvent={handleSelectEvent}
        onSelectSlot={handleSelectSlot}
        onShowMore={handleShowMore}
        formats={formats}
        components={{
          event: CustomEvent, // Componente personalizado para eventos
        }}
        style={{ height: '100%' }}
        messages={{
          allDay: 'Todo el día',
          previous: 'Anterior',
          next: 'Siguiente',
          today: 'Hoy',
          month: 'Mes',
          week: 'Semana',
          day: 'Día',
          agenda: 'Agenda',
          date: 'Fecha',
          time: 'Hora',
          event: 'Evento',
          noEventsInRange: 'No hay eventos en este rango.',
          showMore: (total: number) => `+ Ver más (${total})`,
        }}
      />
    </div>
  );
};