import { Route, Routes } from 'react-router-dom';
import { AuthRoutes } from '../auth/routes/AuthRoutes';
import { CalendarRoutes } from '../Calendar/routes/CalendarRoutes';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/auth/*" element={<AuthRoutes />} />
      <Route path="/*" element={<CalendarRoutes />} />
    </Routes>
  );
};
