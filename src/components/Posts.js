import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const Posts = ({ posts }) => {
  const renderItem = (post) => {
    return (
      <TableRow key={post.id}>
        <TableCell align="center">{post.userId}</TableCell>
        <TableCell align="center">{post.id}</TableCell>
        <TableCell align="center">{post.title}</TableCell>
        <TableCell align="center">{post.body}</TableCell>
      </TableRow>
    );
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">UserId</TableCell>
            <TableCell align="center">Id</TableCell>
            <TableCell align="center">Title</TableCell>
            <TableCell align="center">Body</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          { posts.map(post => renderItem(post)) }
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Posts;