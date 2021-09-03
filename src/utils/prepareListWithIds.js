import { nanoid } from 'nanoid';

const prepareListWithId = (array) => array.map((ele) => ({ ...ele, id: nanoid() }));

export default prepareListWithId;
