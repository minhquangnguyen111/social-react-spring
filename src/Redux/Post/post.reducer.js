import { CREATE_COMMENT_SUCCESS, CREATE_POST_FAILURE, CREATE_POST_REQUEST, CREATE_POST_SUCCESS, DELETE_POST_SUCCESS, DELETE_POST_REQUEST, GET_ALL_POST_FAILURE, GET_ALL_POST_REQUEST, GET_ALL_POST_SUCCESS, LIKE_POST_FAILURE, LIKE_POST_REQUEST, LIKE_POST_SUCCESS, SAVE_POST_SUCCESS, LIKE_COMMENT_REQUEST, LIKE_COMMENT_SUCCESS, LIKE_COMMENT_FAILURE } from "./post.actionType";

const initialState = {
    post: null,
    loading: false,
    error: null,
    posts: [],
    like: null,
    comments: [],
    newComment: null,
    comment: {}
}

export const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_POST_REQUEST:
        case GET_ALL_POST_REQUEST:
        case LIKE_POST_REQUEST:
        case DELETE_POST_REQUEST: // Thêm DELETE_POST_REQUEST để xử lý loading trước khi xóa bài đăng
            return { ...state, error: null, loading: true }; // Thiết lập loading là true
        case CREATE_POST_SUCCESS:
            return {
                ...state, post: action.payload,
                posts: [action.payload, ...state.posts],
                loading: false,
                error: null
            }
        case GET_ALL_POST_SUCCESS:
            return {
                ...state,
                posts: action.payload,
                comments: action.payload.comments,
                loading: false,
                error: null
            };
        case LIKE_POST_SUCCESS:
            return {
                ...state,
                like: action.payload,
                posts: state.posts.map((item) => item.id === action.payload.id ? action.payload : item),
                loading: false,
                error: null
            }
        case SAVE_POST_SUCCESS:
            return {
                ...state,
                posts: state.posts.map((post) =>
                    post.id === action.payload.id ? action.payload : post
                ),
                loading: false,
                error: null
            }
        case CREATE_COMMENT_SUCCESS:
            return {
                ...state,
                newComment: action.payload, // Thêm comment mới vào danh sách hiện tại
                loading: false,
                error: null
            }
        case CREATE_POST_FAILURE:
        case GET_ALL_POST_FAILURE:
        case LIKE_POST_FAILURE:
            return { ...state, error: action.payload, loading: false }
        case DELETE_POST_SUCCESS:
            return {
                ...state,
                posts: state.posts.filter(post => post.id !== action.payload), // Loại bỏ bài đăng đã xóa khỏi danh sách bài đăng
                loading: false,
                error: null
            };

        
        default:
            return state;
    }
}