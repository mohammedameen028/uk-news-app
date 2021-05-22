import React from 'react';
import { Grid, Paper, ButtonBase, Chip } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import './index.css'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 2,
  },
  paper: {
    padding: theme.spacing(5),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: '550px',
  },
  Typography: {
    fontSize: 12,
  },
}));

// Reusable component by both latest news and search 
// takes in props as articles data and just does the view

const View = ({ keyword, articles }) => {
  const classes = useStyles();

  const handleClick = (e, { url }) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
    if (newWindow) newWindow.opener = null;
  };

  return (
    <div style={{ paddingTop: "10px" }}>
    {/* conditional Rendering */}
      {keyword ? (
        <div className="keywordDisplay">Searched Keyword : <span>
          <Chip label={keyword} />
        </span>
        </div>
      ) : null}
      <div className={classes.root}>
        <Grid container spacing={1}>
          <Grid container item xs={12} spacing={3}>
              {/* Dynamic rendering from props data using map() */}
            {articles.map((item, index) => (
              <Grid item xs={6} key={index}>
                <Paper className={classes.paper} elevation={3}>
                  <h4 className="title">{item.title}</h4>
                  <ButtonBase
                    onClick={(e) => {
                      handleClick(e, item);
                    }}
                  >
                    <img
                      alt={item.title}
                      src={item.urlToImage}
                      width="400px"
                      height="240px"
                    />
                  </ButtonBase>
                  <p className="description">
                    {item.description}
                  </p>
                  <p className="detail">
                    Source:
                    {item.source.name} | Author:
                    {item.author} | Published At:
                    {item.publishedAt}
                  </p>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default View;
