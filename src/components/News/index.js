import React                                            from 'react';
import { Image, Linking, Text, TouchableOpacity, View } from 'react-native';
import styles                                           from './styles';
import I18n from '../../locales';

import moment from 'moment';

const News = ({item, index}) => {
  const handleClick = (url) => {
    Linking.canOpenURL(url).then(supported => {
      if (supported) {
        Linking.openURL(url);
      }
    });
  };

  const formattedTime = moment(item.publishedAt).format('H:mm:a');
  const formattedDate = moment(item.publishedAt).format('MMM Do YYYY');

  return (
    <View key={index} style={styles.container}>
      {
        item.urlToImage ? <Image style={styles.image} source={{uri: item.urlToImage}}/> : (
          <View style={styles.noImageWrapper}>
            <Image style={styles.noImage} source={require('../../assets/empty-image.png')}/>
          </View>
        )
      }
      <View style={styles.content}>
        <Text style={styles.title}>{item.title}</Text>
        <View style={styles.newsDetail}>
          <Image style={styles.icon} source={require('../../assets/clock.png')}/>
          <Text style={styles.newsDetailText}>{formattedTime}</Text>
          {
            item.source.id ? ([
              <Image key='image' style={styles.icon} source={require('../../assets/comment-bubble.png')}/>,
              <Text key='text' style={styles.newsDetailText}>By {item.source.name}</Text>
            ]) : null
          }
        </View>
        <Text style={styles.description}>{item.description}</Text>
        <View style={styles.bottomBlock}>
          <TouchableOpacity
            onPress={handleClick.bind(null, item.url)}
            style={styles.readMore}>
            <Text style={styles.readMoreLabel}>{I18n.t('news-read-more-button')} ></Text>
          </TouchableOpacity>
          <Text style={styles.time}>{formattedDate}</Text>
        </View>
      </View>
    </View>
  )
};

export default News;