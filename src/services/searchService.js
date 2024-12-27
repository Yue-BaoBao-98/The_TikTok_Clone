import * as request from '~/utils/httpsRequest';

const searchService = async (queries, type = 'less') => {
    try {
        const res = await request.get('users/search', {
            params: {
                q: queries,
                type,
            },
        });
        // console.log(res.data);

        return res.data;
    } catch (error) {
        console.log(error);
    }
};

export default searchService;
