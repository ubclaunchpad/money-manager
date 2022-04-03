import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import CustomModal from '../components/CustomModal';
import StyledButton from '../components/StyledButton';

const ImagePreview = ({ isModalVisible, setModalVisible, b64Img, setb64img }) => {
  const deleteAndClose = () => {
    setModalVisible(false);
    setb64img('');
  };

  return (
    <CustomModal isModalVisible={isModalVisible} setModalVisible={setModalVisible}>
      {b64Img !== '' && (
        <Image
          style={{ width: 320, height: 500, borderRadius: 15, marginHorizontal: 20 }}
          source={{ uri: b64Img }}
        />
      )}

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 20,
        }}>
        <View style={styles.button}>
          <StyledButton label="Save" onTap={() => setModalVisible(false)} />
        </View>

        <View style={styles.button}>
          <StyledButton label="Delete" onTap={() => deleteAndClose()} />
        </View>
      </View>
    </CustomModal>
  );
};

const styles = StyleSheet.create({
  button: {
    marginHorizontal: 20,
  },
});

export default ImagePreview;
