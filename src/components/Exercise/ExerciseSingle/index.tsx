import React from 'react';
import {
  Container,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
} from '@material-ui/core';
import SportsHandball from '@material-ui/icons/SportsHandball';
import SportsHockey from '@material-ui/icons/SportsHockey';
import PanTool from '@material-ui/icons/PanTool';
import RepeatIcon from '@material-ui/icons/Repeat';

import ReactMarkdown from 'react-markdown';

import Breadcrumb from 'components/Breadcrumb';

import { MediaProps } from 'types/media';
import { StyledVideo } from './styles';

interface ExerciseSingleProps {
  title: string;
  primaryMuscle: {
    abbreviation: string;
    title: string;
    bodyArea: string;
    __typename: string;
  };
  videoUrl: string;
  image: MediaProps;
  equipment: EquipmentProps[];
  body: string;
  secondaryMuscle: SecondaryMuscleProps[];
  type: string;
  variationExercise: ExerciseSingleProps[];
  videoMedia: {
    url: string;
  };
}

interface EquipmentProps {
  title: string;
}

interface SecondaryMuscleProps {
  title: string;
  __typename: string;
}

interface SummaryListProps {
  primaryText: string;
  secondaryText: any;
  icon: object;
}

const SummaryList: React.FC<SummaryListProps> = ({
  primaryText,
  secondaryText,
  icon,
}) => {
  if (
    (secondaryText && typeof secondaryText === 'string') ||
    (secondaryText &&
      typeof secondaryText === 'object' &&
      secondaryText.length > 0)
  ) {
    return (
      <List>
        <ListItem>
          <ListItemAvatar>
            <Avatar>{icon}</Avatar>
          </ListItemAvatar>
          <ListItemText primary={primaryText} secondary={secondaryText} />
        </ListItem>
      </List>
    );
  } else return null;
};

const ExerciseSingle: React.FC<ExerciseSingleProps> = ({
  body,
  title,
  primaryMuscle,
  equipment,
  secondaryMuscle,
  videoUrl,
  type,
  variationExercise,
  videoMedia,
}) => {
  return (
    <Container>
      <Grid container spacing={2} justify="space-between">
        <Grid item xs={6} md={6}>
          <h1>{title}</h1>
        </Grid>

        <Grid item xs={6} md={3}>
          <Breadcrumb
            currentTitle={title}
            previousSlug={'/exercises'}
            previousTitle="Exercises"
          ></Breadcrumb>
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        <Grid item xs={12} md={9}>
          <StyledVideo>
            <iframe
              allowFullScreen
              src={videoMedia ? videoMedia.url : videoUrl}
              title={`${title}`}
            />
          </StyledVideo>
        </Grid>

        <Grid xs={12} md={3}>
          <SummaryList
            primaryText="Exercise Type"
            secondaryText={type.replace(/_/g, ' ')}
            icon={<SportsHandball />}
          />
          <SummaryList
            primaryText="Primary Target Muscle"
            secondaryText={primaryMuscle.title}
            icon={<PanTool />}
          />

          <SummaryList
            primaryText="Secondary Target Muscles"
            secondaryText={secondaryMuscle.map((muscle, index) => {
              return index < secondaryMuscle.length - 1
                ? `${muscle.title}, `
                : muscle.title;
            })}
            icon={<PanTool />}
          />
          <SummaryList
            primaryText="Equipment"
            secondaryText={equipment.map((equipmentItem, index) => {
              return index < equipment.length - 1
                ? `${equipmentItem.title}, `
                : equipmentItem.title;
            })}
            icon={<SportsHockey />}
          />
          <SummaryList
            primaryText="Variation"
            secondaryText={variationExercise.map((exercise, index) => {
              return index < variationExercise.length - 1
                ? `${exercise.title}, `
                : exercise.title;
            })}
            icon={<RepeatIcon />}
          />
        </Grid>
      </Grid>
      <ReactMarkdown source={body} />
    </Container>
  );
};

export default ExerciseSingle;
