export function renderDashboard(cards){

    return `

<div class="dashboard-grid">

${cards.map(card).join("")}

</div>

`;

}

function card(item){

    return `

<div class="dashboard-card">

<div class="icon">

${item.icon}

</div>

<h2>

${item.value}

</h2>

<p>

${item.title}

</p>

</div>

`;

}
