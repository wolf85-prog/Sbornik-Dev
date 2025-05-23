import {Alert} from 'react-native';

export default function asyncAlert({
  title,
  message,
  cancelText = 'Отмена',
  okText = 'Да',
  onPress
})  {
  return new Promise(resolve => {
    Alert.alert(
      title,
      message,
      [
        {
          style: 'cancel',
          text: cancelText,
          onPress: () => {
            resolve(false);
          }
        },
        {
          text: okText,
          onPress: () => {
            onPress?.();
            resolve(true);
          }
        }
      ],
      {
        cancelable: true,
        onDismiss: () => resolve(false)
      }
    );
  });
}
