import { createModalStyles } from '@/assets/styles/modalStyle';
import { Doc } from '@/convex/_generated/dataModel';
import useTheme from '@/hooks/useTheme';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Modal, Pressable, Text, TouchableOpacity, View } from 'react-native';

type Todo = Doc<"todos">;

interface TodoModalProps {
  visible: boolean;
  todo: Todo;
  onClose: () => void;
  onEdit?: () => void;
  onDelete?: () => void;
}

const TodoModal = ({ visible, todo, onClose, onEdit, onDelete }: TodoModalProps) => {

  const handleEdit = () => {
    onEdit?.();
    onClose();
  };

  const handleDelete = () => {
    onDelete?.();
    onClose();
  };
  const {colors } = useTheme();
  const modalStyle = createModalStyles(colors);

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <Pressable 
        style={modalStyle.modalOverlay}
        onPress={onClose}
      >
        <Pressable style={modalStyle.modalContent}>
          <Text style={modalStyle.modalTitle}>{todo.text}</Text>
          
          <View style={modalStyle.buttonContainer}>
            {/* Edit Button */}
            <TouchableOpacity
              style={[modalStyle.button, modalStyle.editButton]}
              onPress={handleEdit}
              activeOpacity={0.7}
            >
              <Ionicons name="pencil" size={20} color="#fff" />
              <Text style={modalStyle.buttonText}>Edit</Text>
            </TouchableOpacity>

            {/* Delete Button */}
            <TouchableOpacity
              style={[modalStyle.button, modalStyle.deleteButton]}
              onPress={handleDelete}
              activeOpacity={0.7}
            >
              <Ionicons name="trash" size={20} color="#fff" />
              <Text style={modalStyle.buttonText}>Delete</Text>
            </TouchableOpacity>
          </View>
        </Pressable>
      </Pressable>
    </Modal>
  );
};

export default TodoModal;