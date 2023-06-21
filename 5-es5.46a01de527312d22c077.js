function _classCallCheck(e,b){if(!(e instanceof b))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,b){for(var t=0;t<b.length;t++){var a=b[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,_toPropertyKey(a.key),a)}}function _createClass(e,b,t){return b&&_defineProperties(e.prototype,b),t&&_defineProperties(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function _toPropertyKey(e){var b=_toPrimitive(e,"string");return"symbol"==typeof b?b:String(b)}function _toPrimitive(e,b){if("object"!=typeof e||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var a=t.call(e,b||"default");if("object"!=typeof a)return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===b?String:Number)(e)}(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{S2jg:function(e,b,t){"use strict";t.r(b),t.d(b,"FuelBillsModule",(function(){return d}));var a,o,l,r=t("ofXK"),i=t("tyNb"),n=t("fXoL"),p=[{path:"",component:(a=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"ngOnInit",value:function(){}}]),e}(),a.\u0275fac=function(e){return new(e||a)},a.\u0275cmp=n.yb({type:a,selectors:[["app-fuel-bill-main"]],decls:228,vars:0,consts:[["id","fuel-bill"],[1,"row"],[1,"col-md-6"],[1,"col-md-12"],["for","fs-station-name",1,"form-label"],["id","fs-station-name","type","text",1,"form-control"],["data-error","fs-station-name",1,"validation-message"],[1,"col-md-12","mt-3"],["for","fs-address",1,"form-label"],["id","fs-address","rows","3",1,"form-control"],["data-error","fs-address",1,"validation-message"],[1,"col-lg-6","col-md-12","mt-3"],["for","fs-fuel-rate",1,"form-label"],["id","fs-fuel-rate","type","number",1,"form-control"],["data-error","fs-fuel-rate",1,"validation-message"],["for","fs-amount",1,"form-label"],["id","fs-amount","type","number",1,"form-control"],["data-error","fs-amount","id","ErrorAmount",1,"validation-message"],["for","fs-date",1,"form-label"],["id","fs-date","placeholder","","type","date",1,"form-control"],["data-error","fs-date",1,"validation-message"],["for","fs-time",1,"form-label"],["id","fs-time","placeholder","","type","time",1,"form-control"],["data-error","fs-time",1,"validation-message"],["for","u-name",1,"form-label"],["id","u-name","type","text",1,"form-control"],["data-error","u-name",1,"validation-message"],["for","u-vechicle-number",1,"form-label"],["id","u-vechicle-number","type","text",1,"form-control"],["data-error","u-vechicle-number",1,"validation-message"],["for","u-vehicle-type",1,"form-label"],["id","u-vehicle-type",1,"form-control"],["data-error","u-vehicle-type",1,"validation-message"],["for","u-payment-type",1,"form-label"],["id","u-payment-type",1,"form-control"],["data-error","u-payment-type",1,"validation-message"],["for","fs-receipt-number",1,"form-label"],["id","fs-receipt-number","type","text",1,"form-control"],["data-error","fs-receipt-number",1,"validation-message"],[1,"col-md-3","mt-3"],[1,"form-check"],["checked","","id","vat-none","name","vat-type","type","radio",1,"form-check-input"],["for","vat-none",1,"form-check-label"],[1,"col-4","col-md-3","mt-3","p-md-0"],["id","vat-cst","name","vat-type","type","radio",1,"form-check-input"],["for","vat-cst",1,"form-check-label"],[1,"col-4","col-md-3","mt-3","p-0"],["id","vat-gst","name","vat-type","type","radio",1,"form-check-input"],["for","vat-gst",1,"form-check-label"],["id","vat-tax","name","vat-type","type","radio",1,"form-check-input"],["for","vat-tax",1,"form-check-label"],[1,"col-md-12","mt-3","mb-3"],["id","vat-number","type","text","value","06AAMPY6980B1Z8",1,"form-control","d-none"],[1,"col-md-12","d-none"],[1,"form-label"],[1,"col-12","d-none"],["checked","","id","flexRadioTemplate1","name","flexRadioDefault","type","radio",1,"form-check-input"],[1,"form-check-label"],[1,"col-2"],["checked","","id","template-1","name","templates","type","radio",1,"form-check-input","select-template"],["for","template-1",1,"form-check-label"],["id","template-2","name","templates","type","radio",1,"form-check-input","select-template"],["for","template-2",1,"form-check-label"],[1,"col-6"],["checked","","id","pump-logo-bharat-petroleum","name","fs-logo","type","radio",1,"form-check-input"],["for","pump-logo-bharat-petroleum",1,"form-check-label"],["id","pump-logo-indian-oil","name","fs-logo","type","radio",1,"form-check-input"],["for","pump-logo-indian-oil",1,"form-check-label"],["id","pump-logo-hp","name","fs-logo","type","radio",1,"form-check-input"],["for","pump-logo-hp",1,"form-check-label"],["id","pump-logo-essar-oil","name","fs-logo","type","radio",1,"form-check-input"],["for","pump-logo-essar-oil",1,"form-check-label"],[1,"bilWrapper"],["data-tm","template-1",1,"templates","template-1","bill-container","d-none"],["data-tm","template-2",1,"templates","template-2","bill-container"],[1,"bill"],[1,"template-overlay","overlay-1"],[1,"template-overlay","overlay-2"],[1,"template-overlay","overlay-3"],["data-tm","fs-logo","alt","Bharat Petroleum","src","https://sohelkhan00000.github.io/cdn-generate-reciept/assets/images/bill/pump-logo-bharat-petroleum.webp",1,"fs-logo"],[1,"welcome"],[1,"pump-name-para"],["data-tm","fs-station-name",1,"fs-station-name"],["data-tm","fs-address",1,"fs-address"],["data-tm","vat-none",1,"vat-none","d-none"],[1,"vat-type"],["data-tm","vat-number",1,"vat-number"],[1,"tele-number"],["data-tm","fs-receipt-number",1,"fs-receipt-number"],[1,"fcc-id"],[1,"fip-id"],[1,"nozzle-id-para"],[1,"nozzle-id"],[1,"product-type"],["data-tm","fs-fuel-rate",1,"fs-fuel-rate"],["data-tm","fs-amount",1,"fs-amount"],[1,"value-ltr-para"],[1,"value-ltr"],["data-tm","u-vehicle-type",1,"u-vehicle-type"],[1,"u-vechicle-number"],[1,"customer-name-para"],["data-tm","u-name",1,"u-name"],["data-tm","fs-date",1,"fs-date"],["data-tm","fs-time",1,"fs-time"],[1,"cash-mode"],["data-tm","u-payment-type",1,"u-payment-type"],[1,"thanks-para"],[1,"col-md-12","col-lg-6","d-grid","d-md-block"],["id","download-pdf","type","button",1,"btn","btn-success","mx-auto","download-pdf"],["role","status","aria-hidden","true",1,"spinner-grow","spinner-grow-sm"],[1,"download-text"]],template:function(e,b){1&e&&(n.Hb(0,"div",0),n.Hb(1,"div",1),n.Hb(2,"div",2),n.Hb(3,"div",1),n.Hb(4,"div",3),n.Hb(5,"label",4),n.Sb(6,"Fuel Station Name"),n.Gb(),n.Fb(7,"input",5),n.Fb(8,"p",6),n.Gb(),n.Hb(9,"div",7),n.Hb(10,"label",8),n.Sb(11,"Address"),n.Gb(),n.Fb(12,"textarea",9),n.Fb(13,"p",10),n.Gb(),n.Hb(14,"div",11),n.Hb(15,"label",12),n.Sb(16,"Fuel Rate"),n.Gb(),n.Fb(17,"input",13),n.Fb(18,"p",14),n.Gb(),n.Hb(19,"div",11),n.Hb(20,"label",15),n.Sb(21,"Total Amount"),n.Gb(),n.Fb(22,"input",16),n.Fb(23,"p",17),n.Gb(),n.Hb(24,"div",11),n.Hb(25,"label",18),n.Sb(26,"Fuel Bill Date"),n.Gb(),n.Fb(27,"input",19),n.Fb(28,"p",20),n.Gb(),n.Hb(29,"div",11),n.Hb(30,"label",21),n.Sb(31,"Fuel Bill Time"),n.Gb(),n.Fb(32,"input",22),n.Fb(33,"p",23),n.Gb(),n.Hb(34,"div",7),n.Hb(35,"label",24),n.Sb(36,"Customer Name"),n.Gb(),n.Fb(37,"input",25),n.Fb(38,"p",26),n.Gb(),n.Hb(39,"div",11),n.Hb(40,"label",27),n.Sb(41,"Vehicle Number"),n.Gb(),n.Fb(42,"input",28),n.Fb(43,"p",29),n.Gb(),n.Hb(44,"div",11),n.Hb(45,"label",30),n.Sb(46,"Vehicle Type"),n.Gb(),n.Hb(47,"select",31),n.Hb(48,"option"),n.Sb(49,"Petrol"),n.Gb(),n.Hb(50,"option"),n.Sb(51,"Deisel"),n.Gb(),n.Hb(52,"option"),n.Sb(53,"CNG"),n.Gb(),n.Hb(54,"option"),n.Sb(55,"Electric"),n.Gb(),n.Gb(),n.Fb(56,"p",32),n.Gb(),n.Hb(57,"div",11),n.Hb(58,"label",33),n.Sb(59,"Payment Type"),n.Gb(),n.Hb(60,"select",34),n.Hb(61,"option"),n.Sb(62,"Cash"),n.Gb(),n.Hb(63,"option"),n.Sb(64,"Online"),n.Gb(),n.Hb(65,"option"),n.Sb(66,"Debit Card"),n.Gb(),n.Gb(),n.Fb(67,"p",35),n.Gb(),n.Hb(68,"div",11),n.Hb(69,"label",36),n.Sb(70,"Receipt Number"),n.Gb(),n.Fb(71,"input",37),n.Fb(72,"p",38),n.Gb(),n.Hb(73,"div",39),n.Hb(74,"div",40),n.Fb(75,"input",41),n.Hb(76,"label",42),n.Sb(77,"None"),n.Gb(),n.Gb(),n.Gb(),n.Hb(78,"div",43),n.Hb(79,"div",40),n.Fb(80,"input",44),n.Hb(81,"label",45),n.Sb(82,"CST TIN"),n.Gb(),n.Gb(),n.Gb(),n.Hb(83,"div",46),n.Hb(84,"div",40),n.Fb(85,"input",47),n.Hb(86,"label",48),n.Sb(87,"GST TIN"),n.Gb(),n.Gb(),n.Gb(),n.Hb(88,"div",46),n.Hb(89,"div",40),n.Fb(90,"input",49),n.Hb(91,"label",50),n.Sb(92,"TXN NO"),n.Gb(),n.Gb(),n.Gb(),n.Hb(93,"div",51),n.Fb(94,"input",52),n.Gb(),n.Gb(),n.Gb(),n.Hb(95,"div",2),n.Hb(96,"div",1),n.Hb(97,"div",53),n.Hb(98,"label",54),n.Sb(99,"Select Template"),n.Gb(),n.Gb(),n.Hb(100,"div",55),n.Hb(101,"div",40),n.Fb(102,"input",56),n.Hb(103,"label",57),n.Sb(104,"Template 1"),n.Gb(),n.Gb(),n.Gb(),n.Hb(105,"div",3),n.Hb(106,"label",54),n.Sb(107,"Select Template"),n.Gb(),n.Gb(),n.Hb(108,"div",58),n.Hb(109,"div",40),n.Fb(110,"input",59),n.Hb(111,"label",60),n.Sb(112,"1"),n.Gb(),n.Gb(),n.Gb(),n.Hb(113,"div",58),n.Hb(114,"div",40),n.Fb(115,"input",61),n.Hb(116,"label",62),n.Sb(117,"2"),n.Gb(),n.Gb(),n.Gb(),n.Hb(118,"div",7),n.Hb(119,"label",54),n.Sb(120,"Select Logo"),n.Gb(),n.Gb(),n.Hb(121,"div",63),n.Hb(122,"div",40),n.Fb(123,"input",64),n.Hb(124,"label",65),n.Sb(125,"Bharat Petroleum"),n.Gb(),n.Gb(),n.Gb(),n.Hb(126,"div",63),n.Hb(127,"div",40),n.Fb(128,"input",66),n.Hb(129,"label",67),n.Sb(130,"Indian Oil"),n.Gb(),n.Gb(),n.Gb(),n.Hb(131,"div",63),n.Hb(132,"div",40),n.Fb(133,"input",68),n.Hb(134,"label",69),n.Sb(135,"HP Oil"),n.Gb(),n.Gb(),n.Gb(),n.Hb(136,"div",63),n.Hb(137,"div",40),n.Fb(138,"input",70),n.Hb(139,"label",71),n.Sb(140,"Essar Oil"),n.Gb(),n.Gb(),n.Gb(),n.Hb(141,"div",3),n.Hb(142,"div",72),n.Fb(143,"div",73),n.Hb(144,"div",74),n.Hb(145,"div",75),n.Hb(146,"div"),n.Hb(147,"p",76),n.Sb(148,"receipt receipt"),n.Gb(),n.Hb(149,"p",77),n.Sb(150,"receipt receipt"),n.Gb(),n.Hb(151,"p",78),n.Sb(152,"receipt receipt"),n.Gb(),n.Fb(153,"img",79),n.Hb(154,"p",80),n.Sb(155,"WELCOME!!! "),n.Gb(),n.Hb(156,"p",81),n.Fb(157,"span",82),n.Sb(158,"\xa0\xa0"),n.Fb(159,"span",83),n.Gb(),n.Hb(160,"p",84),n.Hb(161,"span",85),n.Sb(162,"CST NUMBER: "),n.Gb(),n.Fb(163,"span",86),n.Gb(),n.Hb(164,"p"),n.Sb(165,"TEL NO: "),n.Fb(166,"span",87),n.Gb(),n.Hb(167,"p"),n.Sb(168,"RECEIPT NO: "),n.Fb(169,"span",88),n.Gb(),n.Hb(170,"p"),n.Sb(171,"FCC ID: "),n.Fb(172,"span",89),n.Gb(),n.Hb(173,"p"),n.Sb(174,"FIP NO: "),n.Fb(175,"span",90),n.Gb(),n.Hb(176,"p",91),n.Sb(177,"NOZZLE NO: "),n.Fb(178,"span",92),n.Gb(),n.Hb(179,"p"),n.Sb(180,"PRODUCT:"),n.Fb(181,"span",93),n.Gb(),n.Hb(182,"p"),n.Sb(183,"RATE/LTR: \u20b9 "),n.Fb(184,"span",94),n.Gb(),n.Hb(185,"p"),n.Sb(186,"AMOUNT: \u20b9 "),n.Fb(187,"span",95),n.Gb(),n.Hb(188,"p",96),n.Sb(189,"VOLUME(LTR): "),n.Fb(190,"span",97),n.Sb(191," lt "),n.Gb(),n.Hb(192,"p"),n.Sb(193,"VEH TYPE: "),n.Fb(194,"span",98),n.Gb(),n.Hb(195,"p"),n.Sb(196,"VEH NO: "),n.Fb(197,"span",99),n.Gb(),n.Hb(198,"p",100),n.Sb(199,"CUSTOMER NAME: "),n.Fb(200,"span",101),n.Gb(),n.Hb(201,"p"),n.Sb(202,"DATE: "),n.Fb(203,"span",102),n.Fb(204,"span",103),n.Gb(),n.Hb(205,"p",104),n.Sb(206,"MODE: "),n.Fb(207,"span",105),n.Gb(),n.Hb(208,"p"),n.Sb(209,"LST NO: "),n.Fb(210,"span"),n.Gb(),n.Hb(211,"p"),n.Sb(212,"VAT NO: "),n.Fb(213,"span"),n.Gb(),n.Hb(214,"p"),n.Sb(215,"ATTENDANT ID: "),n.Hb(216,"span"),n.Sb(217,"not available"),n.Gb(),n.Gb(),n.Hb(218,"p",106),n.Sb(219,"SAVE FUEL YAANI SAVE MONEY !! THANKS FOR FUELLING WITH US. YOU CAN NOW CALL US ON "),n.Hb(220,"span"),n.Sb(221,"1800 226344"),n.Gb(),n.Sb(222," (TOLL-FREE) FOR QUERIES/COMPLAINTS."),n.Gb(),n.Gb(),n.Gb(),n.Gb(),n.Gb(),n.Gb(),n.Gb(),n.Gb(),n.Hb(223,"div",107),n.Hb(224,"button",108),n.Fb(225,"span",109),n.Hb(226,"span",110),n.Sb(227,"Download"),n.Gb(),n.Gb(),n.Gb(),n.Gb(),n.Gb())},encapsulation:2}),a)}],m=((l=_createClass((function e(){_classCallCheck(this,e)}))).\u0275mod=n.Cb({type:l}),l.\u0275inj=n.Bb({factory:function(e){return new(e||l)},imports:[[i.a.forChild(p)],i.a]}),l),d=((o=_createClass((function e(){_classCallCheck(this,e)}))).\u0275mod=n.Cb({type:o}),o.\u0275inj=n.Bb({factory:function(e){return new(e||o)},imports:[[r.b,m]]}),o)}}]);