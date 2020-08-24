import React from 'react';
import { Text, View } from 'react-native';

function IconWithBadge(props) {
  const { badgeCount } = props;
  return (
    <View>
      {props.children}
      {badgeCount > 0 && (
        <View
          style={{
            position: 'absolute',
            right: -6,
            top: 2,
            backgroundColor: 'red',
            borderRadius: 7,
            width: 14,
            height: 14,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text style={{ color: 'white', fontSize: 10, fontWeight: 'bold' }}>
            {badgeCount}
          </Text>
        </View>
      )}
    </View>
  );
}

export default IconWithBadge;