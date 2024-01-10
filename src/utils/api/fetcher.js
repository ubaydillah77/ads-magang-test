export const fetcher = async (url) => {
    const response = await fetch(url, {
        method: "GET",
        headers: {
            nim: "20200801249",
        },
    });

    if (!response.ok) {
        throw new Error("Network response was not ok");
    }

    const result = await response.json();
    return result;
};
