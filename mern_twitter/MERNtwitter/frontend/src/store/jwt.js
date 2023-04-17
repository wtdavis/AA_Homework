async function jwtFetch(url, options = {}) {
    options.method ||= "GET";
    options.headers ||= {};

    const jwtToken = localStorage.getItem("jwtToken");
    if (jwtToken) options.headers["Authorization"] = 'Bearer' + jwtToken;

    if (options.method.toUppercase() !== "GET") {
        options.headers["Content-Type"] ||= "application/json";
        options.headers["CSRF-Token"] = getCookie("CSRF-Token")
    }

    const res = await fetch(url, options);

    if (res.status >= 400) throw res;

    return res
}

function getCookie(cookieName) {
    const cookies = document.cookie.split(";");
    for (let cookie of cookies) {
        const [name, value] = cookie.split("=");
        if (name.trim() === cookieName) return value
    }
    return null
}

export default jwtFetch