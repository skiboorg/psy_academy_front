
export function createDataRepository(appFetch: typeof $fetch){

    return {
        programs(show_on_main:boolean = false){
            if(show_on_main){
                return appFetch(`/api/data/programs/?show_on_main=1`);
            }else {
                return appFetch(`/api/data/programs/`);
            }
        },
        program(slug:string){
                return appFetch(`/api/data/programs/${slug}`);

        },
        staff(){
                return appFetch(`/api/user/staff`);

        },
        staff_by_slug(slug:string){
            return appFetch(`/api/user/staff/${slug}`);

        },
        lectures(){
            return appFetch(`/api/data/lecture/`);
        },
        lecture(slug:string){
            return appFetch(`/api/data/lecture/${slug}`);

        },
        news_tags(){
            return appFetch(`/api/data/news_tags`);
        },
        news(show_on_main: boolean = false, random_count: number = 0) {
            let url = `/api/data/news/`;

            const params = new URLSearchParams();

            if (show_on_main) {
                params.append("show_on_main", "1");
            }

            if (random_count > 0) {
                params.append("random", random_count.toString());
            }

            if (params.toString()) {
                url += "?" + params.toString();
            }

            return appFetch(url);
        },
        news_item(slug:string){
            return appFetch(`/api/data/news/${slug}`);

        },

    }

}
