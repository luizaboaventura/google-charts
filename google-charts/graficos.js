function desenharGraficos() {

   // gráfico de pizza
   var tabela = new google.visualization.DataTable();
   // colunas da tabela
   tabela.addColumn('string', 'categorias');
   tabela.addColumn('number', 'valores');
   // linhas da tabela
   tabela.addRows([
      ['Educação', 2000],
      ['Transporte', 500],
      ['Lazer', 230],
      ['Saúde', 50],
      ['Cartão de crédito', 900],
      ['Alimentação', 260]
   ]);
   // opções que customizam o gráfico
   var opcoes = {
      title: 'Tipos de Gastos',
      height: 400,
      width: 800,
      is3D: true,
      legend: 'labeled',
      pieSliceText: 'value',
      slices: {
         1: { color: 'grey' },
         2: { color: '#a6a6a6' },
         3: { color: 'grey' },
         4: { offset: 0.1 },
         5: { color: 'grey' }
      }
   };
   // desenhando gráfico
   var grafico = new google.visualization.PieChart(document.querySelector('#graficoPizza'));
   grafico.draw(tabela, opcoes);


   // gráfico de linha 
   var tabela = new google.visualization.DataTable();
   // colunas da tabela
   tabela.addColumn('string', 'mês');
   tabela.addColumn('number', 'gastos');
   // linhas da tabela
   tabela.addRows([
      ['jan', 800],
      ['fev', 400],
      ['mar', 1100],
      ['abr', 400],
      ['mai', 500],
      ['jun', 750],
      ['jul', 1500],
      ['ago', 650],
      ['set', 850],
      ['out', 400],
      ['nov', 1000],
      ['dez', 720]
   ]);
   // opções que customizam o gráfico
   var opcoes = {
      title: 'Gastos por Mês',
      height: 300,
      width: 650,
      vAxis: {
         format: 'currency',
         gridlines: { count: 5, color: 'transparent' }
      },
      curveType: 'function',
      legend: 'none'
   };

   var grafico = new google.visualization.LineChart(document.querySelector('#graficoLinha'));
   grafico.draw(tabela, opcoes);


   // gráfico de colunas
   var tabela = new google.visualization.arrayToDataTable(
      [
         ['Mês', 'Entrada', 'Saída'],
         ['jan', 2500, 1000],
         ['fev', 2000, 500],
         ['mar', 3000, 1300],
         ['abr', 1500, 1700],
         ['mai', 5000, 2250],
         ['jun', 3567, 3000],
         ['jul', 3452, 1468],
         ['ago', 1833, 5250],
         ['set', 3803, 5500],
         ['out', 1800, 1000],
         ['nov', 3569, 1500],
         ['dez', 3000, 1740]
      ]);

   var opcoes = {
      title: 'Entradas e saídas da conta',
      width: 800,
      height: 400,
      vAxis: {
         gridlines: { color: 'transparent' },
         format: 'currency',
         title: 'Valores'
      },
      hAxis: { title: 'Mês' }
   };

   var grafico = new google.visualization.ColumnChart(document.querySelector('#graficoColuna'));
   grafico.draw(tabela, opcoes);

   // gráfico de barras
   var dadosJson = $.ajax({
      url: 'https://gist.githubusercontent.com/luizabmf/0371b649ef372c236227c783fbac0876/raw/a053e1a047b0a3482af68022d84b476332a5064f/dados.json',
      dataType: 'json',
      async: false
   }).responseText;

   var tabela = new google.visualization.DataTable(dadosJson);

   /*tabela.addColumn('string', 'categorias');
   tabela.addColumn('number', 'valores');
   tabela.addColumn({ type: 'string', role: 'annotation' });
   tabela.addColumn({ type: 'string', role: 'style' });

   tabela.addRows([
      ['Educação', 2000, 'R$ 2.000,00', 'blue'],
      ['Transporte', 500, 'R$ 500,00', 'grey'],
      ['Lazer', 230, 'R$ 230,00', 'grey'],
      ['Saúde', 50, 'R$ 50,00', 'grey'],
      ['Cartão de crédito', 900, 'R$ 900,00', '#8904B1'],
      ['Alimentação', 260, 'R$ 260,00', 'grey']
   ]);*/

   // ordenando a tabela pela coluna de índice 1
   tabela.sort([{ column: 1, desc: true }]);
   
   //var conversao = tabela.toJSON();
   //console.log(conversao);

   var opcoes = {
      title: 'Tipos de Gastos',
      height: 400,
      width: 800,
      vAxis: {
         gridlines: { count: 0, color: 'transparent' }
      },
      legend: 'none',
      hAxis: {
         gridlines: { color: 'transparent' },
         format: 'currency',
         textPosition: 'none'
      },
      annotations: { alwaysOutside: true }
   };

   var grafico = new google.visualization.BarChart(document.querySelector('#graficoBarras'));
   grafico.draw(tabela, opcoes);


   // gráfico de barras com arquivo json

   var dadosJson = $.ajax({
      //url: 'dados.json',
      url:'https://gist.githubusercontent.com/neforodrigo/aabc275a6a944fc5337f6774803ed94b/raw/8a8a1b61ef174ec0656cf3ea4bf5a8b1d2cb5f22/dados.json',
      dataType: 'json',
      async: false
   }).responseText;

   var tabela = new google.visualization.DataTable(dadosJson);

   tabela.sort([{ column: 1, desc: true }]);

   var opcoes = {
      title: 'Usuários e Poupanças',
      height: 400,
      width: 800,
      hAxis: {
         gridlines: { color: 'transparent' },
         textPosition: 'none'
      },
      legend: 'none',
      annotations: { alwaysOutside: true },
   }

   var grafico = new google.visualization.BarChart(document.querySelector('#graficoBarrasJson'));
   grafico.draw(tabela, opcoes);

}