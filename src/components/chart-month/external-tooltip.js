const getOrCreateTooltip = (chart) => {
    let tooltipEl = chart.canvas.parentNode.querySelector('div');

    if (!tooltipEl) {
        tooltipEl = document.createElement('div');
        tooltipEl.style.background = 'rgba(0, 0, 0, 0.5)';
        tooltipEl.style.borderRadius = '3px';
        tooltipEl.style.color = 'white';
        tooltipEl.style.opacity = 1;
        tooltipEl.style.pointerEvents = 'none';
        tooltipEl.style.position = 'absolute';
        tooltipEl.style.transform = 'translate(-50%, 0)';
        tooltipEl.style.transition = 'all .1s ease';

        const table = document.createElement('table');
        table.style.margin = '0px';

        tooltipEl.appendChild(table);
        chart.canvas.parentNode.appendChild(tooltipEl);
    }

    return tooltipEl;
};

export const externalTooltipHandler = (context) => {
    const { chart, tooltip } = context;

    let tooltipEl = null;
    if (tooltip.dataPoints[0].raw == undefined || tooltip.body[0].lines.length == 0) {
        return;
    } 
    
    tooltipEl = getOrCreateTooltip(chart);

    if (tooltip.opacity === 0) {
        tooltipEl.style.opacity = 0;
        return;
    }

    if (tooltip.body) {
        const titleLines = tooltip.title || [];
        const bodyLines = tooltip.body.map(b => b.lines);
        const footerLines = tooltip.footer || [];

        const tableHead = document.createElement('thead');

        bodyLines.forEach((body, i) => {
            const colors = tooltip.labelColors[i];

            const span = document.createElement('span');
            span.style.background = colors.backgroundColor;
            span.style.borderColor = colors.borderColor;
            span.style.borderWidth = '2px';
            span.style.marginRight = '10px';
            span.style.height = '10px';
            span.style.width = '10px';
            span.style.display = 'inline-block';

            const tr = document.createElement('tr');
            tr.style.backgroundColor = 'inherit';
            tr.style.borderWidth = 0;

            const th = document.createElement('th');
            th.style.borderWidth = 0;
            th.style.fontSize = "16px";

            const text = document.createTextNode(body);

            th.appendChild(span);
            th.appendChild(text);
            th.appendChild(document.createElement("hr"));
            tr.appendChild(th);
            tableHead.appendChild(tr);
        });


        const tableBody = document.createElement('tbody');

        titleLines.forEach(title => {
            const tr = document.createElement('tr');
            tr.style.borderWidth = 0;

            const td = document.createElement('td');
            td.style.borderWidth = 0;
            td.style.fontSize = "22px";
            td.style.fontWeight = 700;
            td.style.color = "lightblue";
            const text = document.createTextNode(title);

            td.appendChild(text);
            tr.appendChild(td);
            tableBody.appendChild(tr);
        });

        
        const tableFooter = document.createElement('tfoot');

        footerLines.forEach(footer => {
            const tr = document.createElement('tr');
            tr.style.borderWidth = 0;

            const td = document.createElement('td');
            td.style.borderWidth = 0;
            const text = document.createTextNode(footer);

            td.appendChild(text);
            tr.appendChild(td);
            tableFooter.appendChild(tr);
        });

        const tableRoot = tooltipEl.querySelector('table');

        while (tableRoot.firstChild) {
            tableRoot.firstChild.remove();
        }

        tableRoot.appendChild(tableHead);
        tableRoot.appendChild(tableBody);
        tableRoot.appendChild(tableFooter);
    }

    const { offsetLeft: positionX, offsetTop: positionY } = chart.canvas;

    tooltipEl.style.opacity = 1;
    tooltipEl.style.left = positionX + tooltip.caretX + 'px';
    tooltipEl.style.top = positionY + tooltip.caretY + 'px';
    tooltipEl.style.font = tooltip.options.bodyFont.string;
    tooltipEl.style.padding = tooltip.options.padding + 'px ' + tooltip.options.padding + 'px';
};