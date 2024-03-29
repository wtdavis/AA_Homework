const csrfFetch = async (url, options = {}) => {
    options.method ||= 'GET';
    options.headers = {};

    if (options.method.toUpperCase() !== 'GET') {
        options.headers['X-CSRF-Token'] = sessionStorage.getItem("X-CSRF-Token");
        options.headers['content-type'] ||= 'application/json'
    };
    const res = await fetch(url, options);
    if (res.status >= 400) {throw res};
    return res
}

export function storeCSRFToken(response) {
    const csrfToken = response.headers.get('X-CSRF-Token')
    if (csrfToken) {sessionStorage.setItem('X-CSRF-Token', csrfToken)};
}

export async function restoreCSRF() {
    const response = await fetch('/api/session');
    storeCSRFToken(response);
    return response;
}

export default csrfFetch