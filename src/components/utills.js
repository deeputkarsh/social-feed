const getTimeDiffFromNow = (date)=>{
    //TODO can use moment
    //Or logic can be improved
    const now = Date.now();
    if(typeof date === 'string') {
        date = new Date(date);
    }
    const timeDiff = now - date;
    const seconds = timeDiff/1000;
    if (seconds<0) {
        return 'Just now';
    } else if(seconds<60) {
        return `${Math.floor(seconds)} secs`;
    } else if(seconds<(60 * 60)) {
        return `${Math.floor(seconds/60)} m`;
    } else if(seconds<(3600 * 24)) {
        return `${Math.floor(seconds/3600)} h`;
    } else if(seconds<(86400 * 7)) {
        return `${Math.floor(seconds/86400)} d`;
    } else if(seconds<(604800 * 52)){
        return `${Math.floor(seconds/604800)} w`;
    } else {
        return `${Math.floor(seconds/31449600)} y`;
    }
}

const getPostTypeText = (element_type)=>{
    let postTypeText = "";
	switch(element_type){
		case 'questions':
			postTypeText = "Answer";
			break;
		case 'feedposts' :
			postTypeText = "Comment";
			break;
		default :
		postTypeText = "Comment";
    }
    return postTypeText;
}
const getSubPostData = (element_type,data)=>{
    let returnObj = {};
    switch(element_type){
		case 'questions':
            returnObj = {
                images: data.images,
                text: data.question_post,
                imageUrl: data.question_image_url,
                time: data.question_time
            };
			break;
		case 'feedposts' :
            returnObj = {
                images: data.images,
                text: data.ugc_post,
                imageUrl: data.ugc_image_url,
                time: data.ugc_time
            };
			break;
		default :
		    returnObj = {};
    }
    return returnObj;
}

export {
    getSubPostData,
    getPostTypeText,
    getTimeDiffFromNow
};