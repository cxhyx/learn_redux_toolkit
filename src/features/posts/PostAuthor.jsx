import PropTypes from 'prop-types';

import { useSelector } from 'react-redux';

import { selectAllUsers } from '../users/usersSlice';

const PostAuthor = ({ userId }) => {
  const users = useSelector(selectAllUsers);

  const author = users.find((user) => user.id === userId);

  return <span>by {author ? author.name : 'Unknown Author'}</span>;
};

PostAuthor.propTypes = {
  // * propTypes 首字母不能大写
  userId: PropTypes.number,
};

export default PostAuthor;
