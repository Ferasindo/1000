var wms_layers = [];

var format_IND_adm1_0 = new ol.format.GeoJSON();
var features_IND_adm1_0 = format_IND_adm1_0.readFeatures(json_IND_adm1_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IND_adm1_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IND_adm1_0.addFeatures(features_IND_adm1_0);
var lyr_IND_adm1_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IND_adm1_0, 
                style: style_IND_adm1_0,
                popuplayertitle: 'IND_adm1',
                interactive: true,
    title: 'IND_adm1<br />\
    <img src="styles/legend/IND_adm1_0_0.png" /> Andaman and Nicobar<br />\
    <img src="styles/legend/IND_adm1_0_1.png" /> Andhra Pradesh<br />\
    <img src="styles/legend/IND_adm1_0_2.png" /> Arunachal Pradesh<br />\
    <img src="styles/legend/IND_adm1_0_3.png" /> Assam<br />\
    <img src="styles/legend/IND_adm1_0_4.png" /> Bihar<br />\
    <img src="styles/legend/IND_adm1_0_5.png" /> Chandigarh<br />\
    <img src="styles/legend/IND_adm1_0_6.png" /> Chhattisgarh<br />\
    <img src="styles/legend/IND_adm1_0_7.png" /> Dadra and Nagar Haveli<br />\
    <img src="styles/legend/IND_adm1_0_8.png" /> Daman and Diu<br />\
    <img src="styles/legend/IND_adm1_0_9.png" /> Delhi<br />\
    <img src="styles/legend/IND_adm1_0_10.png" /> Goa<br />\
    <img src="styles/legend/IND_adm1_0_11.png" /> Gujarat<br />\
    <img src="styles/legend/IND_adm1_0_12.png" /> Haryana<br />\
    <img src="styles/legend/IND_adm1_0_13.png" /> Himachal Pradesh<br />\
    <img src="styles/legend/IND_adm1_0_14.png" /> Jammu and Kashmir<br />\
    <img src="styles/legend/IND_adm1_0_15.png" /> Jharkhand<br />\
    <img src="styles/legend/IND_adm1_0_16.png" /> Karnataka<br />\
    <img src="styles/legend/IND_adm1_0_17.png" /> Kerala<br />\
    <img src="styles/legend/IND_adm1_0_18.png" /> Lakshadweep<br />\
    <img src="styles/legend/IND_adm1_0_19.png" /> Madhya Pradesh<br />\
    <img src="styles/legend/IND_adm1_0_20.png" /> Maharashtra<br />\
    <img src="styles/legend/IND_adm1_0_21.png" /> Manipur<br />\
    <img src="styles/legend/IND_adm1_0_22.png" /> Meghalaya<br />\
    <img src="styles/legend/IND_adm1_0_23.png" /> Mizoram<br />\
    <img src="styles/legend/IND_adm1_0_24.png" /> Nagaland<br />\
    <img src="styles/legend/IND_adm1_0_25.png" /> Orissa<br />\
    <img src="styles/legend/IND_adm1_0_26.png" /> Puducherry<br />\
    <img src="styles/legend/IND_adm1_0_27.png" /> Punjab<br />\
    <img src="styles/legend/IND_adm1_0_28.png" /> Rajasthan<br />\
    <img src="styles/legend/IND_adm1_0_29.png" /> Sikkim<br />\
    <img src="styles/legend/IND_adm1_0_30.png" /> Tamil Nadu<br />\
    <img src="styles/legend/IND_adm1_0_31.png" /> Telangana<br />\
    <img src="styles/legend/IND_adm1_0_32.png" /> Tripura<br />\
    <img src="styles/legend/IND_adm1_0_33.png" /> Uttar Pradesh<br />\
    <img src="styles/legend/IND_adm1_0_34.png" /> Uttaranchal<br />\
    <img src="styles/legend/IND_adm1_0_35.png" /> West Bengal<br />\
    <img src="styles/legend/IND_adm1_0_36.png" /> <br />' });

lyr_IND_adm1_0.setVisible(true);
var layersList = [lyr_IND_adm1_0];
lyr_IND_adm1_0.set('fieldAliases', {'ID_0': 'ID_0', 'ISO': 'ISO', 'NAME_0': 'NAME_0', 'ID_1': 'ID_1', 'NAME_1': 'NAME_1', 'TYPE_1': 'TYPE_1', 'ENGTYPE_1': 'ENGTYPE_1', 'NL_NAME_1': 'NL_NAME_1', 'VARNAME_1': 'VARNAME_1', });
lyr_IND_adm1_0.set('fieldImages', {'ID_0': 'TextEdit', 'ISO': 'TextEdit', 'NAME_0': 'TextEdit', 'ID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'TYPE_1': 'TextEdit', 'ENGTYPE_1': 'TextEdit', 'NL_NAME_1': 'TextEdit', 'VARNAME_1': 'TextEdit', });
lyr_IND_adm1_0.set('fieldLabels', {'ID_0': 'no label', 'ISO': 'no label', 'NAME_0': 'no label', 'ID_1': 'no label', 'NAME_1': 'no label', 'TYPE_1': 'no label', 'ENGTYPE_1': 'no label', 'NL_NAME_1': 'no label', 'VARNAME_1': 'no label', });
lyr_IND_adm1_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});