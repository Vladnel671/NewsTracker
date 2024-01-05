export const breakpointColumnsObj = {
    default: 3,
    1250: 2,
    830: 1
};

export const PER_PAGE = 10

export const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString(undefined, {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
};

export const regex = /<a[^>]*>([^<]+)<\/a>/g