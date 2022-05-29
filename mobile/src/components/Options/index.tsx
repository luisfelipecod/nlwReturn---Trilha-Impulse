import React from 'react';
import { View, Text} from 'react-native';

import { Copyright } from '../Copyright';
import { Option } from '../Option';
import { FeedbackType } from '../Widget';
 
import { feedbackTypes } from '../../utils/feedbackTypes';

import { styles } from './styles';

interface Props{
  onFeedbackTypeOnChanged: (feedbackType:FeedbackType) => void;
}

export function Options({ onFeedbackTypeOnChanged }: Props) {
  return (
   
    <View style={styles.container}>
      <Text style= {styles.title}>
        Deixe seu Feedback
      </Text>
      
      <View style= {styles.options}> 
          {
            Object
            .entries(feedbackTypes)
            .map(([key, value]) => (
              <Option 
                key = {key}
                title = {value.title}
                image = {value.image}
                onPress = {() => onFeedbackTypeOnChanged(key as FeedbackType)}
              />
            ))
          }
      </View>

      <Copyright />
    </View>
  );
}