/* Settings for the Country Office Annual Requirements tool (Requirements Checklist, Deliverables, Dashboards).
   Edit only the text between the quote marks. Keep every comma and bracket.
   Leave LAYER_URL empty ("") to run the page in demo mode. */
window.COAR_CONFIG = {
  PORTAL_URL: "https://npaid.maps.arcgis.com",
  CLIENT_ID: "bAZAOXg4cHYFnbl2",

  // Main layer (HO reviewers only): used for the Dashboards
  LAYER_URL: "https://services1.arcgis.com/9pLtiug18wgR3gBR/arcgis/rest/services/service_66dd1823df094915b3dcf7e24d0e7bd1/FeatureServer/0",

  // One view per country office (filtered to that country, shared with its group).
  // Paste each view's address when you create it; empty = that office uses the main layer.
  COUNTRY_LAYER_URLS: {
    afghanistan:            "https://services1.arcgis.com/9pLtiug18wgR3gBR/arcgis/rest/services/COAR_%E2%80%93_Afghanistan/FeatureServer/0",
    angola:                 "https://services1.arcgis.com/9pLtiug18wgR3gBR/arcgis/rest/services/COAR_%E2%80%93_Angola/FeatureServer/0",
    bosnia_and_herzegovina: "",
    cambodia:               "",
    colombia:               "",
    ecuador:                "",
    ethiopia:               "",
    iraq:                   "",
    kosovo:                 "",
    lao_pdr:                "https://services1.arcgis.com/9pLtiug18wgR3gBR/arcgis/rest/services/COAR_%E2%80%93_Lao_PDR/FeatureServer/0",
    lebanon:                "",
    mozambique:             "",
    myanmar:                "",
    palestine:              "",
    peru:                   "",
    rwanda:                 "",
    south_sudan:            "",
    sudan:                  "",
    syria:                  "",
    thailand:               "",
    ukraine:                "",
    vietnam:                "",
    yemen:                  "",
    zimbabwe:               ""
  },

  DEFAULT_YEAR: "2027",
  SUBMIT_ROLES: ["country_director"]
};
