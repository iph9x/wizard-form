import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

import { FormsArrayPage, ResultPage, StepOnePage, StepThreePage, StepTwoPage } from 'src/pages';
import { ROUTES } from 'src/shared/constants';

const Router: React.VFC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.stepOne} element={<StepOnePage />} />
        <Route path={ROUTES.stepTwo} element={<StepTwoPage />} />
        <Route path={ROUTES.stepThree} element={<StepThreePage />} />
        <Route path={ROUTES.result} element={<ResultPage />} />
        <Route path={ROUTES.formsArray} element={<FormsArrayPage />} />
        <Route path="*" element={<Navigate to={ROUTES.stepOne} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
