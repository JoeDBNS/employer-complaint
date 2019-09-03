var timeout = null;


// Vue
var MainVue = new Vue({
	el: '#app-container',
	data: {
		urlParams: null,
		pagesPossible: [
			'login',
			'index',
			'complaint',
			'logs'
		],
		modal: false,
		page: 0,
		loadingLogin: false,
		showLoginError: false,
		complaints: [
			{
				id: '1',
				type: 'complaint',
				claimanant: 'Neils Millard',
				respondent: 'Fivebridge',
				msfw: false,
				filed_date: '02/17/2019',
				status: 'inactive'
			},
			{
				id: '2',
				type: 'complaint',
				claimanant: 'Briant Gascoyen',
				respondent: 'Jamia',
				msfw: false,
				filed_date: '11/25/2018',
				status: 'inactive'
			},
			{
				id: '3',
				type: 'pending',
				claimanant: 'Evyn Carrel',
				respondent: 'Tagopia',
				msfw: true,
				filed_date: '02/05/2019',
				status: 'active'
			},
			{
				id: '4',
				type: 'violation',
				claimanant: 'Roxanne Wogan',
				respondent: 'Kaymbo',
				msfw: false,
				filed_date: '12/15/2018',
				status: 'inactive'
			},
			{
				id: '5',
				type: 'complaint',
				claimanant: 'Nikolaos Badcock',
				respondent: 'Shufflebeat',
				msfw: true,
				filed_date: '11/28/2018',
				status: 'inactive'
			},
			{
				id: '6',
				type: 'complaint',
				claimanant: 'Kelcey Hanks',
				respondent: 'Gabtune',
				msfw: false,
				filed_date: '06/17/2019',
				status: 'active'
			},
			{
				id: '7',
				type: 'complaint',
				claimanant: 'Karyl Vanyushin',
				respondent: 'Realfire',
				msfw: true,
				filed_date: '03/13/2019',
				status: 'inactive'
			},
			{
				id: '8',
				type: 'violation',
				claimanant: 'Artie Algate',
				respondent: 'Gabtype',
				msfw: false,
				filed_date: '11/09/2018',
				status: 'inactive'
			},
			{
				id: '9',
				type: 'pending',
				claimanant: 'Theodoric Langland',
				respondent: 'Tazz',
				msfw: true,
				filed_date: '05/16/2019',
				status: 'active'
			},
			{
				id: '10',
				type: 'violation',
				claimanant: 'Tansy Ebbrell',
				respondent: 'Yacero',
				msfw: false,
				filed_date: '11/11/2018',
				status: 'inactive'
			},
			{
				id: '11',
				type: 'complaint',
				claimanant: 'Sharity Lenz',
				respondent: 'Twitterwire',
				msfw: true,
				filed_date: '08/24/2018',
				status: 'inactive'
			},
			{
				id: '12',
				type: 'complaint',
				claimanant: 'Perle Greedier',
				respondent: 'Agimba',
				msfw: false,
				filed_date: '10/10/2018',
				status: 'inactive'
			},
			{
				id: '13',
				type: 'complaint',
				claimanant: 'Tomasina Burgh',
				respondent: 'Leexo',
				msfw: true,
				filed_date: '04/23/2019',
				status: 'active'
			},
			{
				id: '14',
				type: 'complaint',
				claimanant: 'Kippy Dransfield',
				respondent: 'Leenti',
				msfw: false,
				filed_date: '08/14/2019',
				status: 'active'
			},
			{
				id: '15',
				type: 'complaint',
				claimanant: 'Wendell Saltmarshe',
				respondent: 'Livepath',
				msfw: false,
				filed_date: '10/22/2018',
				status: 'inactive'
			},
			{
				id: '16',
				type: 'violation',
				claimanant: 'Josias Titman',
				respondent: 'Topicstorm',
				msfw: false,
				filed_date: '04/29/2019',
				status: 'active'
			},
			{
				id: '17',
				type: 'violation',
				claimanant: 'Nelie Hyrons',
				respondent: 'Gevee',
				msfw: true,
				filed_date: '12/13/2018',
				status: 'inactive'
			},
			{
				id: '18',
				type: 'complaint',
				claimanant: 'Batholomew Whacket',
				respondent: 'Feedbug',
				msfw: true,
				filed_date: '05/28/2019',
				status: 'inactive'
			},
			{
				id: '19',
				type: 'violation',
				claimanant: 'Isaak Pealing',
				respondent: 'Myworks',
				msfw: false,
				filed_date: '11/17/2018',
				status: 'inactive'
			},
			{
				id: '20',
				type: 'complaint',
				claimanant: 'Codee Rispin',
				respondent: 'Layo',
				msfw: false,
				filed_date: '04/16/2019',
				status: 'inactive'
			},
			{
				id: '21',
				type: 'complaint',
				claimanant: 'Carly Lace',
				respondent: 'Realfire',
				msfw: false,
				filed_date: '04/29/2019',
				status: 'inactive'
			},
			{
				id: '22',
				type: 'complaint',
				claimanant: 'Marchelle Menauteau',
				respondent: 'Zava',
				msfw: true,
				filed_date: '01/13/2019',
				status: 'inactive'
			},
			{
				id: '23',
				type: 'violation',
				claimanant: 'Beltran Philipet',
				respondent: 'Quatz',
				msfw: false,
				filed_date: '04/17/2019',
				status: 'inactive'
			},
			{
				id: '24',
				type: 'violation',
				claimanant: 'Robbyn Calken',
				respondent: 'Riffpath',
				msfw: false,
				filed_date: '11/16/2018',
				status: 'inactive'
			},
			{
				id: '25',
				type: 'complaint',
				claimanant: 'Hyacinthie Tudball',
				respondent: 'Skimia',
				msfw: true,
				filed_date: '09/03/2018',
				status: 'inactive'
			},
			{
				id: '26',
				type: 'complaint',
				claimanant: 'Robinett Schultes',
				respondent: 'Yozio',
				msfw: false,
				filed_date: '02/25/2019',
				status: 'inactive'
			},
			{
				id: '27',
				type: 'complaint',
				claimanant: 'Urbanus Tattershall',
				respondent: 'Tazzy',
				msfw: false,
				filed_date: '09/05/2018',
				status: 'inactive'
			},
			{
				id: '28',
				type: 'violation',
				claimanant: 'Tristam Candey',
				respondent: 'Wikizz',
				msfw: false,
				filed_date: '10/18/2018',
				status: 'inactive'
			},
			{
				id: '29',
				type: 'complaint',
				claimanant: 'Imojean Spicer',
				respondent: 'Browsetype',
				msfw: true,
				filed_date: '04/21/2019',
				status: 'inactive'
			},
			{
				id: '30',
				type: 'complaint',
				claimanant: 'Giffer Parlet',
				respondent: 'Latz',
				msfw: false,
				filed_date: '02/10/2019',
				status: 'inactive'
			},
			{
				id: '31',
				type: 'complaint',
				claimanant: 'Asher Courtman',
				respondent: 'Oyondu',
				msfw: false,
				filed_date: '06/24/2019',
				status: 'inactive'
			},
			{
				id: '32',
				type: 'violation',
				claimanant: 'Estrella Tschierse',
				respondent: 'Camimbo',
				msfw: false,
				filed_date: '06/30/2019',
				status: 'inactive'
			},
			{
				id: '33',
				type: 'complaint',
				claimanant: 'Fleurette Duesbury',
				respondent: 'Kazu',
				msfw: false,
				filed_date: '02/02/2019',
				status: 'inactive'
			},
			{
				id: '34',
				type: 'complaint',
				claimanant: 'Nancie Alexandrou',
				respondent: 'Gabtune',
				msfw: true,
				filed_date: '12/23/2018',
				status: 'inactive'
			},
			{
				id: '35',
				type: 'complaint',
				claimanant: 'Margaretha Youngs',
				respondent: 'Blogtag',
				msfw: false,
				filed_date: '06/08/2019',
				status: 'inactive'
			},
			{
				id: '36',
				type: 'complaint',
				claimanant: 'Skelly Allsop',
				respondent: 'Geba',
				msfw: false,
				filed_date: '10/19/2018',
				status: 'inactive'
			},
			{
				id: '37',
				type: 'complaint',
				claimanant: 'Andreana Dunbleton',
				respondent: 'Chatterpoint',
				msfw: false,
				filed_date: '07/08/2019',
				status: 'inactive'
			},
			{
				id: '38',
				type: 'complaint',
				claimanant: 'Artie Algate',
				respondent: 'Gabtype',
				msfw: true,
				filed_date: '11/09/2018',
				status: 'inactive'
			},
			{
				id: '39',
				type: 'complaint',
				claimanant: 'Theodoric Langland',
				respondent: 'Tazz',
				msfw: false,
				filed_date: '05/16/2019',
				status: 'active'
			},
			{
				id: '40',
				type: 'violation',
				claimanant: 'Tansy Ebbrell',
				respondent: 'Yacero',
				msfw: false,
				filed_date: '11/11/2018',
				status: 'inactive'
			},
			{
				id: '41',
				type: 'complaint',
				claimanant: 'Sharity Lenz',
				respondent: 'Twitterwire',
				msfw: false,
				filed_date: '08/24/2018',
				status: 'inactive'
			},
			{
				id: '42',
				type: 'complaint',
				claimanant: 'Perle Greedier',
				respondent: 'Agimba',
				msfw: false,
				filed_date: '10/10/2018',
				status: 'inactive'
			},
			{
				id: '43',
				type: 'violation',
				claimanant: 'Tomasina Burgh',
				respondent: 'Leexo',
				msfw: true,
				filed_date: '04/23/2019',
				status: 'active'
			},
			{
				id: '44',
				type: 'complaint',
				claimanant: 'Kippy Dransfield',
				respondent: 'Leenti',
				msfw: false,
				filed_date: '08/14/2019',
				status: 'active'
			},
			{
				id: '45',
				type: 'violation',
				claimanant: 'Wendell Saltmarshe',
				respondent: 'Livepath',
				msfw: true,
				filed_date: '10/22/2018',
				status: 'inactive'
			},
			{
				id: '46',
				type: 'complaint',
				claimanant: 'Josias Titman',
				respondent: 'Topicstorm',
				msfw: true,
				filed_date: '04/29/2019',
				status: 'active'
			},
			{
				id: '47',
				type: 'complaint',
				claimanant: 'Nelie Hyrons',
				respondent: 'Gevee',
				msfw: false,
				filed_date: '12/13/2018',
				status: 'inactive'
			},
			{
				id: '48',
				type: 'complaint',
				claimanant: 'Batholomew Whacket',
				respondent: 'Feedbug',
				msfw: false,
				filed_date: '05/28/2019',
				status: 'inactive'
			},
			{
				id: '49',
				type: 'complaint',
				claimanant: 'Isaak Pealing',
				respondent: 'Myworks',
				msfw: true,
				filed_date: '11/17/2018',
				status: 'inactive'
			},
			{
				id: '50',
				type: 'complaint',
				claimanant: 'Codee Rispin',
				respondent: 'Layo',
				msfw: false,
				filed_date: '04/16/2019',
				status: 'inactive'
			},
			{
				id: '51',
				type: 'violation',
				claimanant: 'Carly Lace',
				respondent: 'Realfire',
				msfw: false,
				filed_date: '04/29/2019',
				status: 'inactive'
			},
			{
				id: '52',
				type: 'violation',
				claimanant: 'Marchelle Menauteau',
				respondent: 'Zava',
				msfw: false,
				filed_date: '01/13/2019',
				status: 'inactive'
			},
			{
				id: '53',
				type: 'complaint',
				claimanant: 'Beltran Philipet',
				respondent: 'Quatz',
				msfw: false,
				filed_date: '04/17/2019',
				status: 'inactive'
			},
			{
				id: '54',
				type: 'complaint',
				claimanant: 'Robbyn Calken',
				respondent: 'Riffpath',
				msfw: false,
				filed_date: '11/16/2018',
				status: 'inactive'
			}
		],
		logsTablePage: 1,
		logsTableShowFilter: false,
		logsTableShowPrintPredefinedDrop: false
	},
	methods: {
		UpdatePage: function(newPage) {
			MainVue.page = newPage;
			SetUrlPageParam(newPage);
		}
	// },
	// watch: {
	// 	logsTableFilterValues: {
	// 		handler(val, oldVal){
	// 			console.log('Item Changed')
	// 			console.log(val)
	// 	  },
	// 	  deep: true
	// 	}
	}
});

// OnLoad Run
window.addEventListener('load', function() {
	GetUrlParams();
	SetPageFromUrlParam();

	flatpickr(document.getElementById('searchInputDateFiled'), {mode: "range", dateFormat: "m/d/Y"});
});

function GetUrlParams() {
	var urlParams = new URLSearchParams(window.location.search);
	var entries = urlParams.entries();
	var entriesDict = {};
	var entriesArray = Array.from(entries);
	entriesArray.forEach(function(entry) {
		entriesDict[entry[0]] = entry[1];
	});
	MainVue.urlParams = entriesDict;
}

function SetPageFromUrlParam() {
	if (MainVue.urlParams.page && MainVue.pagesPossible.includes(MainVue.urlParams.page)) {
		MainVue.UpdatePage(MainVue.urlParams.page);
	}
	else {
		MainVue.UpdatePage('index');
	}
}

function SetUrlPageParam(newPage = '') {
	if (newPage && newPage !== 'index') {
		history.replaceState(null, 'CCM - ' + newPage, window.location.origin + window.location.pathname + '?page=' + newPage.toLowerCase());
	}
	else {
		history.replaceState(null, 'CCM', window.location.origin + window.location.pathname);
	}
}