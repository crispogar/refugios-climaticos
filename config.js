var config = {
    style: 'mapbox://styles/crispozogar/cmbgavb2n000q01se45pt9x10',
    // leave commented to use Mapbox Standard Style
    accessToken: 'pk.eyJ1IjoiY3Jpc3Bvem9nYXIiLCJhIjoiY2w2OTZpZHNoMDBhbTNlcGhjc2llY2gzeiJ9.gqE20heikpHNJAE4ipsSqA',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    insetOptions: {
        markerColor: 'orange'
    },
    insetPosition: 'bottom-right',
    theme: 'light',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: '',
    subtitle: '',
    byline: '',
    footer: 'Generalitat de Cataluña, Ayuntamiento de Murcia y Ayuntamiento de Madrid.<br> Creado usando la plantilla de <a href="https://github.com/mapbox/storytelling" target="_blank" style="color: black">Mapbox Storytelling</a>.',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: '',
            image: 'https://www.barcelona.cat/barcelona-pel-clima/sites/default/files/2024-09/RefugisClimatics2024_01.jpg',
            description: '<i style="font-size:90%">Imagen: Parque de la Ciudadela (Ayuntamiento de Barcelona)</i><br><span style="font-size:120%"><b>Barcelona</b> puso en marcha los <b style="color:#f2c091">● refugios climáticos</b> como medida para combatir las altas temperaturas y ofrecer alternativas para sobrellevarlas. Fue pionera en España, <b>siguiendo los pasos de París</b>.',
            location: {
                center: [2.15847, 41.38865],
                zoom: 12.59,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'second-identifier',
            alignment: 'right',
            hidden: false,
            title: '',
            image: 'https://lomejor.cat/wp-content/uploads/Hospitalet_ParcdelAlhambra_Robert-Ramos.jpg',
            description: '<i style="font-size:90%">Imagen: Parque de la Alhambra de Hospitalet de Llobregat (lomejor.cat)</i><br><span style="font-size:120%">En la capital hay más de 300, <a href="https://datos.gob.es/es/catalogo/a09002970-refugios-climaticos-de-los-municipios-de-cataluna" style="color: black">según la Generalitat</a>. Existen <b>cerca de 2.000 refugios oficiales en toda la comunidad</b>, ya que el Ejecutivo catalán también recopila otros espacios que pueden habilitarse para ello.',
            location: {
                center: [1.93661, 41.44872],
                zoom: 9.77,
                pitch: 0,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'third-identifier',
            alignment: 'left',
            hidden: false,
            title: '',
            image: 'https://www.turismodemurcia.es/images/jardin-de-floridablanca/jardin-de-floridablanca.jpg',
            description: '<i style="font-size:90%">Imagen: Jardín de Floridablanca (Turismo de Murcia)</i><br><span style="font-size:120%">Otra ciudad que identifica claramente sus refugios es <b>Murcia</b>, uno de los puntos calientes del Mediterráneo. El consistorio ha recopilado <a href="https://www.ayuntamientomurcia-salud.es/index.php/noticias/618-refugios-climaticos" style="color: black">cerca de 70 espacios</a> para protegerse del calor; también hay una veintena de <b>jardines "con cobertura aérea</>".',
            location: {
                center: [-1.15469, 37.98882],
                zoom: 12.12,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fourth-chapter',
            alignment: 'right',
            hidden: false,
            title: '',
            image: 'https://cdn.nanarquitectura.com/2024/07/guarderia-plantas-circulo-bellas-artes.jpeg',
            description: '<i style="font-size:90%">Imagen: Círculo de Bellas Artes (NAN Arquitectura)</i><br><span style="font-size:120%">En <b>Madrid</b>, el ayuntamiento sostiene que cuenta con <a href="https://sede.madrid.es/FrameWork/generacionPDF/boam9679_2523.pdf?numeroPublicacion=9679&idSeccion=f4e2c9d207ac0910VgnVCM2000001f4a900aRCRD&nombreFichero=boam9679_2523&cacheKey=25&guid=194da5caf95b0910VgnVCM2000001f4a900aRCRD&csv=true" style="color: black">cerca de 300 lugares</a> para combatir estos episodios. No obstante, varias <b>entidades privadas</b> se adelantaron al consistorio y se convirtieron en espacios seguros para refugiarse del calor.',
            location: {
                center: [-3.67044, 40.41891],
                zoom: 11.88,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
