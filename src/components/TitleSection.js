import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Typography } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  titleStyle: {
    color: (props) => {
      if (props.textVariant === 'black') {
        return theme.palette.primary.main
      } else {
        return theme.palette.warning.main
      }
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '36px',
    },
    marginBottom: '0.825em',
    textAlign: 'center',
  },
}))

/**
 * Getting Started Call to Action typically right above the footer.
 * @param {*} props.children
 * @param {*} props.textVariant
 */
const TitleSection = (props) => {
  const classes = useStyles(props)
  const title = props.children

  return (
    <Grid container>
      <Grid item xs={1} md={2} />
      <Grid item xs={10} md={8}>
        <Typography variant='h2' className={classes.titleStyle}>
          {title}
        </Typography>
      </Grid>
      <Grid item xs={1} md={2} />
    </Grid>
  )
}

export default TitleSection
