const initialState = {
	algo: [],
	algo2: '',
};

export default function reducer(state = initialState, action) {
	switch (action.type) {
		case '1':
			return {
				...state,
				algo2: action.payload,
			};
		case '2':
			return {
				...state,
				algo2: action.payload,
			};

		default:
			return { ...state };
	}
}
