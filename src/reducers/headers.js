const initialState = [
  { field: 'owner.displayName', caption: 'Author' },
  { field: 'title', caption: 'Title' },
  { field: 'answerCount', caption: 'Answers' },
  { field: 'tags[0]', caption: 'Tags' },
];

export default (state = initialState) => state;