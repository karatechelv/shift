import { getDashboardData } from "./dashboard.service.js";
import { buildStatistics } from "./dashboard.statistics.js";
import { renderDashboard } from "./dashboard.view.js";

export function loadDashboard(){

    const data = getDashboardData();

    const cards = buildStatistics(data);

    document
        .getElementById("dashboardView")
        .innerHTML = renderDashboard(cards);

}
