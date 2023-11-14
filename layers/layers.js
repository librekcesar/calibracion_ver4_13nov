var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_ver4_zipcodes_1 = new ol.format.GeoJSON();
var features_ver4_zipcodes_1 = format_ver4_zipcodes_1.readFeatures(json_ver4_zipcodes_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ver4_zipcodes_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ver4_zipcodes_1.addFeatures(features_ver4_zipcodes_1);
var lyr_ver4_zipcodes_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ver4_zipcodes_1, 
                style: style_ver4_zipcodes_1,
                interactive: false,
                title: '<img src="styles/legend/ver4_zipcodes_1.png" /> ver4_zipcodes'
            });
var format_ver4_zonas_volum_2 = new ol.format.GeoJSON();
var features_ver4_zonas_volum_2 = format_ver4_zonas_volum_2.readFeatures(json_ver4_zonas_volum_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ver4_zonas_volum_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ver4_zonas_volum_2.addFeatures(features_ver4_zonas_volum_2);
var lyr_ver4_zonas_volum_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ver4_zonas_volum_2, 
                style: style_ver4_zonas_volum_2,
                interactive: true,
                title: '<img src="styles/legend/ver4_zonas_volum_2.png" /> ver4_zonas_volum'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_ver4_zipcodes_1.setVisible(true);lyr_ver4_zonas_volum_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_ver4_zipcodes_1,lyr_ver4_zonas_volum_2];
lyr_ver4_zipcodes_1.set('fieldAliases', {'country': 'country', 'locality': 'locality', 'state': 'state', 'zonificacion': 'zonificacion', 'catstationid': 'catstationid', 'station_code': 'station_code', 'zipcode': 'zipcode', 'region': 'region', 'station_name': 'station_name', 'id': 'id', 'coverage_type': 'coverage_type', 'cobertura_diferenciada': 'cobertura_diferenciada', 'cluster_diferenciado': 'cluster_diferenciado', 'polygon': 'polygon', 'neighborhood': 'neighborhood', 'fid': 'fid', 'Reporte de Volumen__ver4_zipcodes_promedio_30_dias': 'Reporte de Volumen__ver4_zipcodes_promedio_30_dias', 'Reporte de Volumen__ver4_zipcodes_tag': 'Reporte de Volumen__ver4_zipcodes_tag', });
lyr_ver4_zonas_volum_2.set('fieldAliases', {'zonificacion': 'zonificacion', 'station_code': 'station_code', 'reporte_volumen_zonas_ver4_promedio_30_dias': 'reporte_volumen_zonas_ver4_promedio_30_dias', 'reporte_volumen_zonas_ver4_volumen_zona': 'reporte_volumen_zonas_ver4_volumen_zona', });
lyr_ver4_zipcodes_1.set('fieldImages', {'country': 'TextEdit', 'locality': 'TextEdit', 'state': 'TextEdit', 'zonificacion': 'TextEdit', 'catstationid': 'TextEdit', 'station_code': 'TextEdit', 'zipcode': 'TextEdit', 'region': 'TextEdit', 'station_name': 'TextEdit', 'id': 'TextEdit', 'coverage_type': 'TextEdit', 'cobertura_diferenciada': 'TextEdit', 'cluster_diferenciado': 'TextEdit', 'polygon': 'TextEdit', 'neighborhood': 'TextEdit', 'fid': 'TextEdit', 'Reporte de Volumen__ver4_zipcodes_promedio_30_dias': 'TextEdit', 'Reporte de Volumen__ver4_zipcodes_tag': 'TextEdit', });
lyr_ver4_zonas_volum_2.set('fieldImages', {'zonificacion': 'TextEdit', 'station_code': 'TextEdit', 'reporte_volumen_zonas_ver4_promedio_30_dias': 'TextEdit', 'reporte_volumen_zonas_ver4_volumen_zona': 'TextEdit', });
lyr_ver4_zipcodes_1.set('fieldLabels', {'country': 'no label', 'locality': 'no label', 'state': 'no label', 'zonificacion': 'no label', 'catstationid': 'no label', 'station_code': 'no label', 'zipcode': 'no label', 'region': 'no label', 'station_name': 'no label', 'id': 'no label', 'coverage_type': 'no label', 'cobertura_diferenciada': 'no label', 'cluster_diferenciado': 'no label', 'polygon': 'no label', 'neighborhood': 'no label', 'fid': 'no label', 'Reporte de Volumen__ver4_zipcodes_promedio_30_dias': 'no label', 'Reporte de Volumen__ver4_zipcodes_tag': 'no label', });
lyr_ver4_zonas_volum_2.set('fieldLabels', {'zonificacion': 'header label', 'station_code': 'header label', 'reporte_volumen_zonas_ver4_promedio_30_dias': 'header label', 'reporte_volumen_zonas_ver4_volumen_zona': 'header label', });
lyr_ver4_zonas_volum_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});