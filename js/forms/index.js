const container = document.getElementById("container");
const form = document.getElementById("form");

const countriesString =
    "AfghanistanxxxÅland IslandsxxxAlbaniaxxxAlgeriaxxxAmerican SamoaxxxAndorraxxxAngolaxxxAnguillaxxxAntarcticaxxxAntigua and BarbudaxxxArgentinaxxxArmeniaxxxArubaxxxAustraliaxxxAustriaxxxAzerbaijanxxxBahamasxxxBahrainxxxBangladeshxxxBarbadosxxxBelarusxxxBelgiumxxxBelizexxxBeninxxxBermudaxxxBhutanxxxBolivia (Plurinational State of)xxxBonaire, Sint Eustatius and SabaxxxBosnia and HerzegovinaxxxBotswanaxxxBouvet IslandxxxBrazilxxxBritish Indian Ocean TerritoryxxxBrunei DarussalamxxxBulgariaxxxBurkina FasoxxxBurundixxxCabo VerdexxxCambodiaxxxCameroonxxxCanadaxxxCayman IslandsxxxCentral African RepublicxxxChadxxxChilexxxChinaxxxChristmas IslandxxxCocos (Keeling) IslandsxxxColombiaxxxComorosxxxCongoxxxCongo, Democratic Republic of thexxxCook IslandsxxxCosta RicaxxxCôte d'IvoirexxxCroatiaxxxCubaxxxCuraçaoxxxCyprusxxxCzechiaxxxDenmarkxxxDjiboutixxxDominicaxxxDominican RepublicxxxEcuadorxxxEgyptxxxEl SalvadorxxxEquatorial GuineaxxxEritreaxxxEstoniaxxxEswatinixxxEthiopiaxxxFalkland Islands (Malvinas)xxxFaroe IslandsxxxFijixxxFinlandxxxFrancexxxFrench GuianaxxxFrench PolynesiaxxxFrench Southern TerritoriesxxxGabonxxxGambiaxxxGeorgiaxxxGermanyxxxGhanaxxxGibraltarxxxGreecexxxGreenlandxxxGrenadaxxxGuadeloupexxxGuamxxxGuatemalaxxxGuernseyxxxGuineaxxxGuinea - BissauxxxGuyanaxxxHaitixxxHeard Island and McDonald IslandsxxxHoly SeexxxHondurasxxxHong KongxxxHungaryxxxIcelandxxxIndiaxxxIndonesiaxxxIran(Islamic Republic of)xxxIraqxxxIrelandxxxIsle of ManxxxIsraelxxxItalyxxxJamaicaxxxJapanxxxJerseyxxxJordanxxxKazakhstanxxxKenyaxxxKiribatixxxKorea(Democratic People's Republic of)xxxKorea, Republic ofxxxKuwaitxxxKyrgyzstanxxxLao People's Democratic RepublicxxxLatviaxxxLebanonxxxLesothoxxxLiberiaxxxLibyaxxxLiechtensteinxxxLithuaniaxxxLuxembourgxxxMacaoxxxMadagascarxxxMalawixxxMalaysiaxxxMaldivesxxxMalixxxMaltaxxxMarshall IslandsxxxMartiniquexxxMauritaniaxxxMauritiusxxxMayottexxxMexicoxxxMicronesia(Federated States of)xxxMoldova, Republic ofxxxMonacoxxxMongoliaxxxMontenegroxxxMontserratxxxMoroccoxxxMozambiquexxxMyanmarxxxNamibiaxxxNauruxxxNepalxxxNetherlandsxxxNew CaledoniaxxxNew ZealandxxxNicaraguaxxxNigerxxxNigeriaxxxNiuexxxNorfolk IslandxxxNorth MacedoniaxxxNorthern Mariana IslandsxxxNorwayxxxOmanxxxPakistanxxxPalauxxxPalestine, State ofxxxPanamaxxxPapua New GuineaxxxParaguayxxxPeruxxxPhilippinesxxxPitcairnxxxPolandxxxPortugalxxxPuerto RicoxxxQatarxxxRéunionxxxRomaniaxxxRussian FederationxxxRwandaxxxSaint BarthélemyxxxSaint Helena, Ascension and Tristan da CunhaxxxSaint Kitts and NevisxxxSaint LuciaxxxSaint Martin(French part)xxxSaint Pierre and MiquelonxxxSaint Vincent and the GrenadinesxxxSamoaxxxSan MarinoxxxSao Tome and PrincipexxxSaudi ArabiaxxxSenegalxxxSerbiaxxxSeychellesxxxSierra LeonexxxSingaporexxxSint Maarten(Dutch part)xxxSlovakiaxxxSloveniaxxxSolomon IslandsxxxSomaliaxxxSouth AfricaxxxSouth Georgia and the South Sandwich IslandsxxxSouth SudanxxxSpainxxxSri LankaxxxSudanxxxSurinamexxxSvalbard and Jan MayenxxxSwedenxxxSwitzerlandxxxSyrian Arab RepublicxxxTaiwan, Province of ChinaxxxTajikistanxxxTanzania, United Republic ofxxxThailandxxxTimor - LestexxxTogoxxxTokelauxxxTongaxxxTrinidad and TobagoxxxTunisiaxxxTurkeyxxxTurkmenistanxxxTurks and Caicos IslandsxxxTuvaluxxxUgandaxxxUkrainexxxUnited Arab EmiratesxxxUnited Kingdom of Great Britain and Northern IrelandxxxUnited States of AmericaxxxUnited States Minor Outlying IslandsxxxUruguayxxxUzbekistanxxxVanuatuxxxVenezuela(Bolivarian Republic of)xxxViet NamxxxVirgin Islands(British)xxxVirgin Islands(U.S.)xxxWallis and FutunaxxxWestern SaharaxxxYemenxxxZambiaxxxZimbabwe";

const countriesArray = countriesString.split("xxx");

let countries = document.createElement("datalist");
countries.id = "countries";

countriesArray.forEach((country) => {
    let option = document.createElement("option");
    option.value = country;
    countries.appendChild(option);
});

form.appendChild(countries);

const email = document.getElementById("email");
email.addEventListener("blur", function (event) {
    if (!email.validity.valid) {
        email.classList.add("invalid");
    } else {
        email.classList.remove("invalid");
    }
});

const country = document.getElementById("country");
country.addEventListener("blur", function (event) {
    if (!country.validity.valid) {
        country.classList.add("invalid");
    } else {
        country.classList.remove("invalid");
    }
});

const zip = document.getElementById("zip");
zip.addEventListener("blur", function (event) {
    if (!zip.validity.valid) {
        zip.classList.add("invalid");
    } else {
        zip.classList.remove("invalid");
    }
});

const password = document.getElementById("password");
password.addEventListener("blur", function (event) {
    if (!password.validity.valid) {
        password.classList.add("invalid");
    } else {
        password.classList.remove("invalid");
    }
});

const confirmPassword = document.getElementById("confirm-password");
confirmPassword.addEventListener("blur", function (event) {
    if (
        !confirmPassword.validity.valid ||
        confirmPassword.value != password.value
    ) {
        confirmPassword.classList.add("invalid");
    } else {
        confirmPassword.classList.remove("invalid");
    }
});

form.addEventListener("submit", function (e) {
    if (confirmPassword.value != password.value) {
        e.preventDefault();
    }
});
