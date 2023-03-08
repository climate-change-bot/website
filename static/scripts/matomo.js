var settings = {
  "showIntro": true,
  "divId": "matomo-opt-out",
  "useSecureCookies": true,
  "cookiePath": null,
  "cookieDomain": null,
  "cookieSameSite": "Lax",
  "OptOutComplete": "Opt-out abgeschlossen; Ihre Besuche auf dieser Webseite werden nicht vom Webanalysetool erfasst.",
  "OptOutCompleteBis": "Bitte beachten Sie, dass auch der Matomo-Deaktivierungs-Cookie dieser Webseite gel\u00f6scht wird, wenn Sie die in Ihrem Browser abgelegten Cookies entfernen. Au\u00dferdem m\u00fcssen Sie, wenn Sie einen anderen Computer oder einen anderen Webbrowser verwenden, die Deaktivierungsprozedur nochmals absolvieren.",
  "YouMayOptOut2": "Sie haben die M\u00f6glichkeit zu verhindern, dass von Ihnen hier get\u00e4tigte Aktionen analysiert und verkn\u00fcpft werden.",
  "YouMayOptOut3": "Dies wird Ihre Privatsph\u00e4re sch\u00fctzen, aber wird auch den Besitzer daran hindern, aus Ihren Aktionen zu lernen und die Bedienbarkeit f\u00fcr Sie und andere Benutzer zu verbessern.",
  "OptOutErrorNoCookies": "Die Tracking opt-out Funktion ben\u00f6tigt aktivierte Cookies.",
  "OptOutErrorNotHttps": "Die Tracking opt-out Funktion wird m\u00f6glicherweise nicht funktionieren, weil diese Seite nicht \u00fcber HTTPS geladen wurde. Bitte die Seite neu laden um zu pr\u00fcfen ob der opt out Status ge\u00e4ndert hat.",
  "YouAreNotOptedOut": "Ihr Besuch dieser Webseite wird aktuell von der Matomo Webanalyse erfasst.",
  "UncheckToOptOut": "Diese Checkbox abw\u00e4hlen f\u00fcr Opt-Out.",
  "YouAreOptedOut": "Ihr Besuch dieser Webseite wird aktuell von der Matomo Webanalyse nicht erfasst.",
  "CheckToOptIn": "Diese Checkbox aktivieren f\u00fcr Opt-In."
};
document.initMatomoOptOut = function () {
  window.MatomoConsent.init(settings.useSecureCookies, settings.cookiePath, settings.cookieDomain, settings.cookieSameSite);
  showContent(window.MatomoConsent.hasConsent());
};

window.addEventListener('load', function () {
  var _paq = window._paq = window._paq || [];
  _paq.push(['enableHeartBeatTimer']);
})

function showContent(consent, errorMessage = null, useTracker = false) {

  var errorBlock = '<p style="color: red; font-weight: bold;">';

  var div = document.getElementById(settings.divId);
  if (!div) {
    const warningDiv = document.createElement("div");
    var msg = 'Unable to find opt-out content div: "' + settings.divId + '"';
    warningDiv.id = settings.divId + '-warning';
    warningDiv.innerHTML = errorBlock + msg + '</p>';
    document.body.insertBefore(warningDiv, document.body.firstChild);
    console.log(msg);
    return;
  }

  if (!navigator || !navigator.cookieEnabled) {
    div.innerHTML = errorBlock + settings.OptOutErrorNoCookies + '</p>';
    return;
  }
  if (location.protocol !== 'https:') {
    div.innerHTML = errorBlock + settings.OptOutErrorNotHttps + '</p>';
    return;
  }
  if (errorMessage !== null) {
    div.innerHTML = errorBlock + errorMessage + '</p>';
    return;
  }
  var content = '';
  if (consent) {
    if (settings.showIntro) {
      content += '<p>' + settings.YouMayOptOut2 + ' ' + settings.YouMayOptOut3 + '</p>';
    }
    if (useTracker) {
      content += '<input onclick="_paq.push([\'optUserOut\']);showContent(false, null, true);" id="trackVisits" type="checkbox" checked="checked" />';
    } else {
      content += '<input onclick="window.MatomoConsent.consentRevoked();showContent(false);" id="trackVisits" type="checkbox" checked="checked" />';
    }
    content += '<label for="trackVisits"><strong><span>' + settings.YouAreNotOptedOut + ' ' + settings.UncheckToOptOut + '</span></strong></label>';
  } else {
    if (settings.showIntro) {
      content += '<p>' + settings.OptOutComplete + ' ' + settings.OptOutCompleteBis + '</p>';
    }
    if (useTracker) {
      content += '<input onclick="_paq.push([\'forgetUserOptOut\']);showContent(true, null, true);" id="trackVisits" type="checkbox" />';
    } else {
      content += '<input onclick="window.MatomoConsent.consentGiven();showContent(true);" id="trackVisits" type="checkbox" />';
    }
    content += '<label for="trackVisits"><strong><span>' + settings.YouAreOptedOut + ' ' + settings.CheckToOptIn + '</span></strong></label>';
  }
  div.innerHTML = content;
};

window.MatomoConsent = {
  cookiesDisabled: (!navigator || !navigator.cookieEnabled),
  CONSENT_COOKIE_NAME: 'mtm_consent', CONSENT_REMOVED_COOKIE_NAME: 'mtm_consent_removed',
  cookieIsSecure: false, useSecureCookies: true, cookiePath: '', cookieDomain: '', cookieSameSite: 'Lax',
  init: function (useSecureCookies, cookiePath, cookieDomain, cookieSameSite) {
    this.useSecureCookies = useSecureCookies;
    this.cookiePath = cookiePath;
    this.cookieDomain = cookieDomain;
    this.cookieSameSite = cookieSameSite;
    if (useSecureCookies && location.protocol !== 'https:') {
      console.log('Error with setting useSecureCookies: You cannot use this option on http.');
    } else {
      this.cookieIsSecure = useSecureCookies;
    }
  },
  hasConsent: function () {
    var consentCookie = this.getCookie(this.CONSENT_COOKIE_NAME);
    var removedCookie = this.getCookie(this.CONSENT_REMOVED_COOKIE_NAME);
    if (!consentCookie && !removedCookie) {
      return true; // No cookies set, so opted in
    }
    if (removedCookie && consentCookie) {
      this.setCookie(this.CONSENT_COOKIE_NAME, '', -129600000);
      return false;
    }
    return (consentCookie || consentCookie !== 0);
  },
  consentGiven: function () {
    this.setCookie(this.CONSENT_REMOVED_COOKIE_NAME, '', -129600000);
    this.setCookie(this.CONSENT_COOKIE_NAME, new Date().getTime(), 946080000000);
  },
  consentRevoked: function () {
    this.setCookie(this.CONSENT_COOKIE_NAME, '', -129600000);
    this.setCookie(this.CONSENT_REMOVED_COOKIE_NAME, new Date().getTime(), 946080000000);
  },
  getCookie: function (cookieName) {
    var cookiePattern = new RegExp('(^|;)[ ]*' + cookieName + '=([^;]*)'),
      cookieMatch = cookiePattern.exec(document.cookie);
    return cookieMatch ? window.decodeURIComponent(cookieMatch[2]) : 0;
  },
  setCookie: function (cookieName, value, msToExpire) {
    var expiryDate = new Date();
    expiryDate.setTime((new Date().getTime()) + msToExpire);
    document.cookie = cookieName + '=' + window.encodeURIComponent(value) +
      (msToExpire ? ';expires=' + expiryDate.toGMTString() : '') +
      ';path=' + (this.cookiePath || '/') +
      (this.cookieDomain ? ';domain=' + this.cookieDomain : '') +
      (this.cookieIsSecure ? ';secure' : '') +
      ';SameSite=' + this.cookieSameSite;
    if ((!msToExpire || msToExpire >= 0) && this.getCookie(cookieName) !== String(value)) {
      console.log('There was an error setting cookie `' + cookieName + '`. Please check domain and path.');
    }
  }
};
