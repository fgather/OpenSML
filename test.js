var SmlFile = require('./lib/SmlFile');

smlFile = new SmlFile()
//19010000 

var stream1 = new Buffer('1b1b1b1b010101017606353432313062006200726301017601080500153b022e3905353432390a01a81538107804010201016344f500', 'hex');
var stream2 = new Buffer("760635343236336200620072630401790a01a8153810780401027262026432abe7620171078181c7861801726201648aad846301807975070100000009ff62ff52000a01a8153810780401020175070100010800ff621e52ff5900000000000a7bde0175070100010801ff621e52ff5900000000000a7bde0175070100010802ff621e52ff5900000000000000000175070100100700ff621b52ff550000019b0175078181c78203ff62ff520004454d480175078181c78205ff62ff52008302097bd1b6e37d93f97c5c2fa1f385fabb84ed2465c8d3d5f14f021fa863929ef62c99f6b53993253fcf3de7c33167f717017507010000090b006207520064329d73017507810000090b00620752006489da9d01010163a76a00", 'hex');
var stream3 = new Buffer("76073534323132376200620072630401790a01a8153810780401027262026433c0c3620171078181c7861801726201648bc2bf6301807975070100000009ff62ff52000a01a8153810780401020175070100010800ff621e52ff5900000000000a96b80175070100010801ff621e52ff5900000000000a96b80175070100010802ff621e52ff5900000000000000000175070100100700ff621b52ff550000003a0175078181c78203ff62ff520004454d480175078181c78205ff62ff52008302097bd1b6e37d93f97c5c2fa1f385fabb84ed2465c8d3d5f14f021fa863929ef62c99f6b53993253fcf3de7c33167f717017507010000090b00620752006433b2ae017507810000090b0062075200648aefdb010101630b8600", "hex");
var stream4 = new Buffer("76073534323132376200620072630401790a01a8153810780401027262026433c0c3620171078181c7861801726201648bc2c36301807975070100000009ff62ff52000a01a8153810780401020175070100010800ff621e52ff5900000000000a96b80175070100010801ff621e52ff5900000000000a96b80175070100010802ff621e52ff5900000000000000000175070100100700ff621b52ff550000003a0175078181c78203ff62ff520004454d480175078181c78205ff62ff52008302097bd1b6e37d93f97c5c2fa1f385fabb84ed2465c8d3d5f14f021fa863929ef62c99f6b53993253fcf3de7c33167f717017507010000090b00620752006433b2b2017507810000090b0062075200648aefdf01010163497400", "hex");
var stream5 = new Buffer("76073534323132376200620072630401790a01a8153810780401027262026433c0c3620171078181c7861801726201648bc2c76301807975070100000009ff62ff52000a01a8153810780401020175070100010800ff621e52ff5900000000000a96b80175070100010801ff621e52ff5900000000000a96b80175070100010802ff621e52ff5900000000000000000175070100100700ff621b52ff550000003c0175078181c78203ff62ff520004454d480175078181c78205ff62ff52008302097bd1b6e37d93f97c5c2fa1f385fabb84ed2465c8d3d5f14f021fa863929ef62c99f6b53993253fcf3de7c33167f717017507010000090b00620752006433b2b7017507810000090b0062075200648aefe4010101637f2d00", "hex");
var stream6 = new Buffer("76073534323132376200620072630401790a01a8153810780401027262026433c0c3620171078181c7861801726201648bc3026301807975070100000009ff62ff52000a01a8153810780401020175070100010800ff621e52ff5900000000000a96b90175070100010801ff621e52ff5900000000000a96b90175070100010802ff621e52ff5900000000000000000175070100100700ff621b52ff550000003e0175078181c78203ff62ff520004454d480175078181c78205ff62ff52008302097bd1b6e37d93f97c5c2fa1f385fabb84ed2465c8d3d5f14f021fa863929ef62c99f6b53993253fcf3de7c33167f717017507010000090b00620752006433b2f1017507810000090b0062075200648af01e01010163c51000", "hex");
var stream7 = new Buffer("760735343231383462006200726302017101637608000000001b1b1b1b1a03946c", "hex");

try{
	smlFile.parse(stream1);	
	smlFile.parse(stream2);	
	smlFile.parse(stream3);	
	smlFile.parse(stream4);	
	smlFile.parse(stream5);	
	smlFile.parse(stream6);
	smlFile.parse(stream7);
	
} catch (error) {
	console.log(error);
}


console.log(smlFile.toString());
