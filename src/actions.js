export const ACTION_CREATE_POST = 'ACTION_CREATE_POST';
export const ACTION_UPDATE_POST = 'ACTION_UPDATE_POST';
export const ACTION_DELETE_POST = 'ACTION_DELETE_POST';

export function createPost(payload) {
    return {
        type: ACTION_CREATE_POST,
        payload
    };
}

export function updatePost() {

}

export function deletePost() {
    
}