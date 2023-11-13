export const API_KEY = import.meta.env.VITE_APP_API_KEY;
export const TOP_HEADLINES_COUNTRY = import.meta.env.VITE_APP_TOP_HEADLINES_COUNTRY;
export const TOP_HEADLINES_URL = import.meta.env.VITE_APP_TOP_HEADLINES_URL
export const ALL_NEWS_URL = import.meta.env.VITE_APP_ALL_NEWS_URL

export const breakpointColumnsObj = {
    default: 3,
    1250: 2,
    830: 1
};

export const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString(undefined, {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
};