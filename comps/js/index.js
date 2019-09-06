// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.


// IE11 / Polyfill Array.from fix - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from
// Production steps of ECMA-262, Edition 6, 22.1.2.1
if (!Array.from) {
    Array.from = (function () {
        var toStr = Object.prototype.toString;
        var isCallable = function (fn) {
            return typeof fn === 'function' || toStr.call(fn) === '[object Function]';
        };
        var toInteger = function (value) {
            var number = Number(value);
            if (isNaN(number)) { return 0; }
            if (number === 0 || !isFinite(number)) { return number; }
            return (number > 0 ? 1 : -1) * Math.floor(Math.abs(number));
        };
        var maxSafeInteger = Math.pow(2, 53) - 1;
        var toLength = function (value) {
            var len = toInteger(value);
            return Math.min(Math.max(len, 0), maxSafeInteger);
        };

        // The length property of the from method is 1.
        return function from(arrayLike/*, mapFn, thisArg */) {
            // 1. Let C be the this value.
            var C = this;

            // 2. Let items be ToObject(arrayLike).
            var items = Object(arrayLike);

            // 3. ReturnIfAbrupt(items).
            if (arrayLike == null) {
                throw new TypeError("Array.from requires an array-like object - not null or undefined");
            }

            // 4. If mapfn is undefined, then let mapping be false.
            var mapFn = arguments.length > 1 ? arguments[1] : void undefined;
            var T;
            if (typeof mapFn !== 'undefined') {
                // 5. else
                // 5. a If IsCallable(mapfn) is false, throw a TypeError exception.
                if (!isCallable(mapFn)) {
                    throw new TypeError('Array.from: when provided, the second argument must be a function');
                }

                // 5. b. If thisArg was supplied, let T be thisArg; else let T be undefined.
                if (arguments.length > 2) {
                    T = arguments[2];
                }
            }

            // 10. Let lenValue be Get(items, "length").
            // 11. Let len be ToLength(lenValue).
            var len = toLength(items.length);

            // 13. If IsConstructor(C) is true, then
            // 13. a. Let A be the result of calling the [[Construct]] internal method of C with an argument list containing the single item len.
            // 14. a. Else, Let A be ArrayCreate(len).
            var A = isCallable(C) ? Object(new C(len)) : new Array(len);

            // 16. Let k be 0.
            var k = 0;
            // 17. Repeat, while k < len… (also steps a - h)
            var kValue;
            while (k < len) {
                kValue = items[k];
                if (mapFn) {
                    A[k] = typeof T === 'undefined' ? mapFn(kValue, k) : mapFn.call(T, kValue, k);
                } else {
                    A[k] = kValue;
                }
                k += 1;
            }
            // 18. Let putStatus be Put(A, "length", len, true).
            A.length = len;
            // 20. Return A.
            return A;
        };
    }());
}


// Vue
var MainVue = new Vue({
	el: '#app-container',
	data: {
		urlParams: null,
		pagesPossible: [
			'login',
			'index',
			'complaint',
			'complaint-view',
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
	}
});


// OnLoad Run
window.addEventListener('load', function() {
	GetUrlParams();
	SetPageFromUrlParam();


	// flatpickr(document.getElementById('searchInputDateFiled'), {mode: "range", dateFormat: "m/d/Y"});
	flatpickr(document.getElementsByClassName('input-field-date'), {dateFormat: "m/d/Y"});


    SetReferenceListeners();
    InitFieldListeners();
    SubmitButtonListener();
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

function InitFieldListeners() {
    Array.from(document.getElementsByClassName('input-field')).forEach(function(element) {
        element.addEventListener('change', function(event) {
            CheckFieldChanged(element);
        });
    });
}

function SubmitButtonListener() {
	Array.from(document.getElementsByClassName('btn-submit')).forEach(function(submit_button) {
		submit_button.addEventListener('click', function() {
			var parentForm = this.parentElement.parentElement.parentElement.parentElement;

			emptyRequiredFields = CheckRequiredFields(this.parentElement.parentElement.parentElement.parentElement);
			if (emptyRequiredFields.length === 0) {
				// parentForm.submit();
				confirm(parentForm.id + ' Submitted!')
			}
			else {
				emptyRequiredFields.forEach(function(element) {
					element.classList.add('input-required-failed');
				});
				emptyRequiredFields[0].focus();
			}
		});
	});
}

function CheckFieldChanged(element) {
    switch (element.type) {
        case 'radio':
            Array.from(element.parentElement.getElementsByTagName('label')).forEach(function(radio_element) {
                radio_element.classList.remove('input-required-failed');
            });
            break;

        default:
            if (element.value === '') {
                element.parentElement.getElementsByTagName('label')[0].classList.add('input-label-format-null');
            }
            else {
                element.classList.remove('input-required-failed');
                element.parentElement.getElementsByTagName('label')[0].classList.remove('input-label-format-null');
            }
            break;
    }
}

function CheckRequiredFields(form) {
    var emptyElements = [];

    Array.from(form.querySelectorAll('.input-required')).forEach(function(element) {
        switch (element.type) {
            case 'text':
            case 'textarea':
            case 'select-one':
                if (element.value === '') {
                    emptyElements.push(element);
                }
                break;

            case 'radio':
                if (document.querySelector('[name="' + element.getAttribute('name') + '"]:checked') === null) {
                    Array.from(element.parentElement.getElementsByTagName('label')).forEach(function(radio_element) {
                        emptyElements.push(radio_element);
                    });
                }
                break;

            default:
                console.log(element.type, 'is not accounted for.');
                break;
        }
    });

    return emptyElements;
}

function SetReferenceListeners() {
    // Show or Hide .data-input-reference elements based on data-input-pass attribute value
    Array.from(document.querySelectorAll('[data-input-id]')).forEach(function(id_element) {
        id_element.addEventListener('change', function() {
            Array.from(document.querySelectorAll('[data-input-reference="' + id_element.getAttribute('data-input-id') + '"]')).forEach(function(target_element) {
                if (id_element.value === target_element.getAttribute('data-input-pass')) {
                    target_element.removeAttribute('hidden');

                    // Reenable required input checking
                    Array.from(target_element.querySelectorAll('.input-required-nocheck')).forEach(function(nocheck_element) {
                        nocheck_element.classList.remove('input-required-nocheck');
                        nocheck_element.classList.add('input-required');
                    });
                }
                else {
                    target_element.setAttribute('hidden', 'true');

                    // Disable required input checking
                    Array.from(target_element.querySelectorAll('.input-required')).forEach(function(required_element) {
                        required_element.classList.remove('input-required');
                        required_element.classList.add('input-required-nocheck');
                    });
                }
            });
        });
    });

    // Hide elements and clear inputs when a specified input changes value
    Array.from(document.querySelectorAll('[data-input-id]')).forEach(function(id_element) {
        id_element.addEventListener('change', function() {
            // Hide elements
            Array.from(document.querySelectorAll('[data-input-reference-hide="' + id_element.getAttribute('data-input-id') + '"]')).forEach(function(target_element) {
                target_element.setAttribute('hidden', 'true');

                // Disabled required input checking within elements
                Array.from(target_element.querySelectorAll('.input-required')).forEach(function(required_element) {
                    required_element.classList.remove('input-required');
                    required_element.classList.add('input-required-nocheck');
                });
            });

            // Empty inputs within elements
            Array.from(document.querySelectorAll('[data-input-reference-clear="' + id_element.getAttribute('data-input-id') + '"]')).forEach(function(target_element) {
                if (target_element.type === 'radio') {
                    target_element.checked = false;
                }
                else {
                    target_element.value = '';
                }
            });
        });
    });
}