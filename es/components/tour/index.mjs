import '../../utils/index.mjs';
import Tour from './src/tour.mjs';
import TourStep from './src/step.mjs';
export { tourEmits, tourProps } from './src/tour2.mjs';
import { withInstall, withNoopInstall } from '../../utils/vue/install.mjs';

const ElTour = withInstall(Tour, {
  TourStep
});
const ElTourStep = withNoopInstall(TourStep);

export { ElTour, ElTourStep, ElTour as default };
//# sourceMappingURL=index.mjs.map
