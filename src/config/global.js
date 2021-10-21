export default {
  global: {
    componenteFormativo: 'Exportación de bienes y servicios ',
    descripcionCurso:
      'La exportación consiste en la salida de mercancías del país de origen hacia el extranjero, permitiendo el intercambio de divisas y lo más importante, suplir necesidades y requerimientos de clientes en el exterior.<br><br>   Mediante el estudio del presente material, se logrará identificar el proceso de exportación de bienes y servicios, sus modalidades, regímenes, normativa y factores claves del mismo.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Procesos para la exportación de bienes ',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Oferta exportable colombiana de bienes ',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Regímenes',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Modalidades',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Proceso de exportación ',
            hash: 't_1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo: 'Declaración de exportación (DEX)',
            hash: 't_1_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.6',
            titulo: 'Normas y certificados de origen',
            hash: 't_1_6',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.7',
            titulo: 'Documentación',
            hash: 't_1_7',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.8',
            titulo: 'Normatividad ',
            hash: 't_1_8',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.9',
            titulo: 'Plan Vallejo para la exportación ',
            hash: 't_1_9',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Proceso de exportación de servicios ',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Oferta exportable colombiana de servicios ',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Modos de suministro de servicios',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Pasos para exportar servicios ',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Acuerdos de doble tributación',
            hash: 't_2_4',
          },
        ],
      },
    ],
    subMenu: [
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia: 'Bancolombia (2021). Documentos de exportación en Colombia.',
      link:
        'https://www.grupobancolombia.com/wps/portal/negocios/comercio-internacional/exportar/proceso-aduanero/documentos-exportacion-colombia',
    },
    {
      referencia:
        'Plazas, G. (2009). Normas de origen y acuerdos comerciales. Cámara de comercio de Bogotá.',
      link:
        'https://bibliotecadigital.ccb.org.co/bitstream/handle/11520/11709/1000001101.pdf?seq#:~:text=Las%20normas%20de%20origen%20se,beneficiarios%20de%20una%20preferencia%20arancelaria',
    },
    {
      referencia: 'DIAN . (2021). Normas de origen y acuerdos comerciales.',
      link:
        'https://www.dian.gov.co/atencionciudadano/formulariosinstructivos/Formularios/2014/Formulario_600_2014.pdf',
    },
    {
      referencia:
        'ekomercio . (2021). Soluciones que generan valor. [Web log post].',
      link:
        'https://blog.ekomercio.co/novedades-en-tratados-de-doble-tributacion-y-normatividad-interna-de-colombia',
    },
    {
      referencia: 'DIAN . (2021). Balanza comercial.',
      link:
        'https://www.dane.gov.co/index.php/estadisticas-por-tema/comercio-internacional/balanza-comercial#:~:text=Informaci%C3%B3n%20abril%202021&text=5%20millones%20FOB.-,En%20abril%20de%202021%20se%20registr%C3%B3%20un%20d%C3%A9ficit%20en%20la,US%24464%2C0%20mil ',
    },
    {
      referencia: 'LEGISCOMEX 2021.',
      link:
        'https://www.legiscomex.com/Documentos/proceso-general-para-exportacion-desde-colombia',
    },
    {
      referencia: 'LEGISCOMEX. (2021). LEGISCOMEX.',
      link: 'https://www.legiscomex.com/Documentos/vistos_buenos',
    },
    {
      referencia:
        'Ministerio de Hacienda y Crédito Público. (02 de julio de 2019). Decreto 1165 de 2019. Decreto 1165 de 2019 por el cual se dictan disposiciones relativas al Régimen de aduanas en desarrollo de la ley. Colombia.',
    },
    {
      referencia:
        'PROCOLOMBIA . (2021). PROCOLOMBIA EXPORTACIONES TURISMO INVERSION MARCA PAÍS.',
      link:
        'https://www.colombiatrade.com.co/contacto/preguntas-frecuentes/que-es-el-plan-vallejo-para-bienes?__cf_chl_jschl_tk__=pmd_0a965c1620d3e63cf9951eb2a330b1b9c7c95205-1626883472-0-gqNtZGzNAiKjcnBszQji',
    },
    {
      referencia:
        'PROCOLOMBIA . (2021). PROCOLOMBIA, exportaciones turismo inversión marca país.',
      link:
        'https://www.colombiatrade.com.co/noticias/conozca-el-brochure-de-oferta-exportable-de-colombia-2020',
    },
    {
      referencia:
        'PROCOLOMBIA . (2021). PROCOLOMBIA, exportaciones turismo inversión marca país.',
      link: 'https://online.fliphtml5.com/qwjio/shge/',
    },
    {
      referencia:
        'PROCOLOMBIA. (2018). Guía práctica para exportar servicios desde colombia.',
      link:
        'https://procolombia.co/publicaciones/guia-practica-para-exportar-servicios-desde-colombia?__cf_chl_jschl_tk__=pmd_2fd74d43376d31e15f3af11b36f2cd703b80b38f-1626894309-0-gqNtZGzNAiKjcnBszQj6',
    },
    {
      referencia:
        'PROCOLOMBIA. (2021). PROCOLOMBIA, exportaciones turismo inversión marca país.',
      link:
        'https://www.colombiatrade.com.co/oferta-colombiana-en-exportaciones',
    },
  ],
  glosario: [
    {
      termino: 'Balanza comercial',
      significado:
        'Es un indicador económico que se obtiene de los datos sobre exportación e importación de bienes de consumo o, lo que es lo mismo, de pagos al exterior del país y cobros desde dicho exterior.',
    },
    {
      termino: 'Brochure',
      significado:
        'Herramienta de marketing que hace referencia a la documentación impresa o digital que tiene como objetivo representar a una determinada compañía para informar sobre su organización, productos o servicios.',
    },
    {
      termino: 'Call Centers',
      significado:
        'Es un canal de comunicación entre clientes, o potenciales clientes, y una empresa. La responsabilidad de un call center es administrar las llamadas telefónicas de una organización, con el propósito de hacer más eficiente los procesos de atención y ventas que las empresas brindan por este medio.',
    },
    {
      termino: 'Déficit comercial',
      significado:
        'Es la diferencia negativa entre lo que un país vende al exterior (exportaciones) y lo que ese mismo país compra a otros países (importaciones).',
    },
    {
      termino: 'Exportación',
      significado:
        'Es la salida de bienes y servicios del territorio nacional o de una zona franca cumpliendo todos los requisitos de la ley en uso por los países involucrados y que produce como contrapartida un ingreso de divisas.',
    },
    {
      termino: 'Incoterm',
      significado:
        'Grupo de términos comerciales (de tres letras cada uno) que se utilizan en las transacciones internacionales para aclarar los costes y determinar las cláusulas comerciales incluidas en un contrato de compraventa',
    },
    {
      termino: 'Importación',
      significado:
        'Consiste en la introducción a plaza para el consumo de mercaderías procedentes del exterior del territorio aduanero nacional, sujetas al pago de tributos o al amparo de las franquicias correspondientes.',
    },
    {
      termino: 'Subpartida arancelaria',
      significado:
        'Se entiende como la identificación o codificación numérica de una mercancía que se basa en el Sistema Armonizado (SA), que es una nomenclatura de mercancías desarrollada por la Organización Mundial de Aduanas (OMA)',
    },
    {
      termino: 'Superávit comercial',
      significado:
        'Es la diferencia positiva entre lo que un país vende al exterior (exportaciones) y lo que ese mismo país compra a otros países (importaciones).',
    },
    {
      termino: 'Territorio Aduanero Nacional',
      significado:
        'Área geográfica delimitada dentro del territorio nacional, en donde se desarrollan actividades industriales de bienes y de servicios, o actividades comerciales, bajo una normatividad especial en materia tributaria, aduanera y de comercio exterior.',
    },
    {
      termino: 'Valor agregado',
      significado:
        'Característica o servicio extra que se le da a un producto o servicio con el fin de darle un mayor valor.',
    },
  ],
  complementario: [
    {
      texto:
        'Oferta exportable colombiana de bienes.PROCOLOMBIA. (s.f.). Brochure oferta exportable Colombia.',
      tipo: 'Brochure',
      link: 'https://online.fliphtml5.com/qwjio/shge/',
    },
    {
      texto:
        'Proceso para la exportación de bienes. DIAN. (s.f.). Régimen de exportación.',
      tipo: 'PDF',
      descarga: '/downloads/DI_CF07_anexo2_Regimen-de-exportacion-DIAN (1).pdf',
    },
    {
      texto:
        'Normatividad	Decreto 390 de 2016 [Ministerio de Comercio, Industria y Turismo].  Por el cual se establece la regulación aduanera. Marzo 7 2016.',
      tipo: 'PDF',
      descarga: '/downloads/DI_CF07_anexo3_Nueva_regulacion_aduanera.pdf',
    },
    {
      texto:
        'Proceso de exportación de servicios	PROCOLOMBIA. (2019). Guía práctica para exportar servicios desde Colombia.',
      tipo: 'Presentación',
      link:
        'https://www.slideshare.net/pasante/gua-prctica-para-exportar-servicios-desde-colombia-134918199',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Kateryn Valderrama',
        cargo: 'Experta Técnica',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },

      {
        nombre: 'Alejandro Acevedo',
        cargo: 'Experto Técnico',
        centro: 'Centro de Comercio - Regional Antioquia',
      },
      {
        nombre: 'Beatriz Eugenia Agudelo Vásquez',
        cargo: 'Diseñador Instruccional',
        centro: ' Centro de Gestión Industrial. - Distrito Capital',
      },
      {
        nombre: 'Ana Catalina Córdoba Sus',
        cargo: 'Revisora Metodológica y Pedagógica',
        centro:
          'Centro para La Industria de la Comunicación Gráfica - Distrito Capital',
      },

      {
        nombre: 'Jhon Jairo Rodríguez Pérez',
        cargo: 'Diseñador y evaluador instruccional',
        centro:
          'Centro para La Industria de la Comunicación Gráfica - Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Oscar Marquez Sanabria',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Andrés Mauricio Santaella ochoa',
        cargo: 'Soporte front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Jorge Leonardo Camacho Pardo',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: '',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: '',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
