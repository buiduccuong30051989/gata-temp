const d = {
  icon: 'warn',
  title: 'Warning',
  okText: 'OK',
  closeOnClick: true,
};

export const getErrorMessage = (error) => {
  if (typeof error === 'string') {
    try {
      const parsedErr = JSON.parse(error);
      if (typeof parsedErr === 'string') return error;
      if (parsedErr.message) return parsedErr.message;
    } catch {
      return error;
    }
  }

  if (error?.response?.data?.message) return error?.response?.data?.message;
  return 'Something went wrong!';
};

export const alertParams = {
  error: (e) => ({
    ...d,
    title: '',
    okText: 'Close',
    typeAlert: 'error',
    description: getErrorMessage(e),
  }),
  success: {
    icon: 'success',
    title: 'Changes Saved',
    okText: 'Ok',
    closeOnClick: true,
  },
  endChat: {
    icon: 'speakWarn',
    title: 'Are you sure you want to end this chat?',
    description: 'Please make sure that the customer has been informed.',
    okText: 'Cancel',
    cancelText: 'End Chat',
    closeOnClick: true,
  },
  agentEndedChat: (ender, client) => ({
    icon: 'speakWarn',
    title: 'Your chat has been ended',
    description: `${ender} has ended your chat with ${client}.`,
    okText: 'Okay',
    closeOnClick: true,
  }),
  endedChat: (client) => ({
    icon: 'speakWarn',
    title: 'Chat has been ended',
    description: `You has ended the chat with ${client}.`,
    okText: 'Okay',
    closeOnClick: true,
  }),
  archiveAll: {
    icon: 'speakWarn',
    title: 'Are you sure you want to move\nall missed Chats to history?',
    okText: 'Move All',
    cancelText: 'Cancel',
    closeOnClick: false,
  },
  archiveOneSuccess: {
    icon: 'success',
    title: 'Moved Successfully!',
    description: 'Missed chats has been moved to history.',
    okText: 'Done',
  },
  archiveAllSuccess: {
    icon: 'success',
    title: 'Moved Successfully!',
    description: 'Missed chats have been moved to history.',
    okText: 'Done',
  },
  transferChatSuccess: () => ({
    ...d,
    icon: 'success',
    title: `Transfer Chat Has Been Received`,
    okText: 'OK',
  }),
  transferChatRejected: () => ({
    ...d,
    icon: 'warn',
    title: `Transfer Chat Has Been Rejected`,
    okText: 'OK',
  }),
  chatScriptSent: {
    ...d,
    icon: 'success',
    title: 'Chat Script Sent',
    description: 'Chat script has been sent to the selected recipients.',
    okText: 'OK',
  },
  linkProfile: {
    ...d,
    icon: 'success',
    title: 'Link Profile Success!',
    description: '',
    okText: 'OK',
  },
  inviteAgentSuccess: {
    ...d,
    icon: 'success',
    title: 'Invitation Resent',
    description: '',
    okText: 'OK',
  },
  inviteNewAgentSuccess: {
    icon: 'success',
    title: 'Invitation Sent!',
    description:
      'The agent you have just invited will receive an email with a registration link.',
    okText: 'OK',
  },
  inviteNewAgentWithoutServiceCats: {
    icon: 'speakWarn',
    title:
      'Are you sure you want to invite this\nagent without service categories?',
    description:
      'They will be able to log in to Chatso, but will not be able to access any service chats.',
    cancelText: 'Back',
    okText: 'Invite',
    closeOnClick: false,
  },
  updateAgentWithoutServiceCats: {
    icon: 'speakWarn',
    title: 'Edit agent’s store[s] without assigned service categories?',
    description:
      'The agent will not be able to access any service chats in the store without service categories.',
    cancelText: 'Back',
    okText: 'Save',
    closeOnClick: false,
  },
  confirmSuspendAgent: {
    icon: 'speakWarn',
    title: 'Are you sure you want to suspend this agent?',
    description: 'A suspended agent will not be able to login to Chatso',
    okText: 'Yes',
    cancelText: 'No',
    closeOnClick: true,
  },
  confirmSuspendAgentOnChat: {
    icon: 'speakWarn',
    title:
      'The agent is currently chatting. Are you sure you want to suspend this agent?',
    description:
      'The agent’s ongoing chats will be ended immediately. The suspended agent will not be able to login to Chatso.',
    okText: 'Yes',
    cancelText: 'No',
    closeOnClick: true,
  },
  removePendingAgentSuccess: {
    ...d,
    icon: 'success',
    title: 'Pending Agent Removed',
    description: '',
  },
  confirmActiveAgent: {
    icon: 'speakWarn',
    title: 'Are you sure you want to activate this agent?',
    description: 'An activated agent will have access to Chatso.',
    okText: 'Yes',
    cancelText: 'No',
    closeOnClick: true,
  },
  reactiveAgentSuccess: {
    ...d,
    icon: 'success',
    title: 'Reactive Agent',
    description: '',
    okText: 'OK',
  },
  uploadWrongPhotoTypeAndSize: {
    ...d,
    icon: 'warn',
    title: 'Upload Error',
    description:
      'The image file must be under 10MB and one of the following file types: png jpg jpeg. Please try again.',
    okText: 'Close',
  },
  uploadWrongPhotoType: {
    ...d,
    icon: 'warn',
    title: 'Upload Error',
    description:
      'The image file must be one of the following file types: png jpg jpeg. Please try again.',
    okText: 'Close',
  },
  uploadOverPhotoSize: {
    ...d,
    icon: 'warn',
    title: 'Upload Error',
    description:
      'The image file is larger than the maximum size of 10MB. Please try again.',
    okText: 'Close',
  },
  uploadInvalidPhoto: {
    ...d,
    icon: 'warn',
    title: 'Upload Error',
    description: 'Image file invalid. Please try again.',
    okText: 'Close',
  },
  changePasswordSuccessfully: {
    ...d,
    icon: 'success',
    title: 'New password has been updated successfully!',
    okText: 'Done',
  },
  updateAgentSuccess: {
    ...d,
    icon: 'success',
    title: 'Changes saved!',
    description: 'Agent info has been updated.',
    okText: 'OK',
  },
  confirmDelete: {
    icon: 'warn',
    title: 'Are you sure?',
    okText: 'Delete',
  },
  forceLogout: {
    ...d,
    icon: 'warn',
    title: 'Changes saved!',
    description: '',
    okText: 'Force Logout',
    cancelText: 'Cancel',
  },
  chatShortcutConfirmDelete: {
    ...d,
    icon: 'speakWarn',
    title: 'Are you sure you want to delete this shortcut?',
    okText: 'Yes',
    cancelText: 'No',
  },
  confirmOpenCustomHours: {
    ...d,
    icon: 'speakWarn',
    title: 'Are you sure you want todisable custom service hours?',
    description:
      'Customers will be able to access the chat service and connect with agents at any time of the day.',
    okText: 'Disable',
    cancelText: 'Close',
  },
  confirmSaveCustomHours: {
    ...d,
    icon: 'speakWarn',
    title: 'Save custom service hours?',
    description:
      'Chatso service will be affected immediately with the new custom service hours.',
    okText: 'Save',
    cancelText: 'Cancel',
  },
  confirmQuitEditCustomHours: {
    ...d,
    icon: 'speakWarn',
    title: 'Quit editing custom service hours?',
    description: 'The changes will not be saved to the store’s custom hours.',
    okText: 'Cancel',
    cancelText: 'Quit',
  },
  confirmActivateStore: {
    ...d,
    icon: 'speakWarn',
    title: 'Are you sure you want to activate Chatso service for this store?',
    okText: 'Activate',
    cancelText: 'Cancel',
  },
  confirmDeactivateStore: {
    ...d,
    icon: 'speakWarn',
    title: 'Are you sure you want to deactivate Chatso service for this store?',
    description:
      'All pending and ongoing chats will be closed and moved to the chat history.',
    okText: 'Deactivate',
    cancelText: 'Cancel',
  },
  confirmRemoveServiceCategory: {
    ...d,
    icon: 'speakWarn',
    title: 'Are you sure you want to delete this service category?',
    okText: 'Delete',
    cancelText: 'Cancel',
  },
  confirmContinueWithoutUploadingStoreImage: {
    ...d,
    icon: 'speakWarn',
    title: 'Continue without uploading Store Image?',
    description:
      'The store logo will be defaulted to the initials of the store name.',
    okText: 'Next',
    cancelText: 'Close',
  },
  confirmContinueWithoutUploadingProfilePhoto: {
    ...d,
    icon: 'speakWarn',
    title: 'Continue without uploading Profile Photo?',
    description:
      'A placeholder avatar will appear by your name when you chat with customers.',
    okText: 'Next',
    cancelText: 'Cancel',
  },
  deleteAgent: {
    ...d,
    icon: 'warn',
    title: 'Delete Agent',
    description: 'Do you want to delete Agent?',
    okText: 'Delete',
    cancelText: 'Cancel',
  },
  deleteAgentSuccess: {
    ...d,
    icon: 'success',
    title: 'Pending Agent Removed',
    description: 'The invitation link from the invitation is now disabled.',
    okText: 'OK',
  },
  confirmPromptVisitor: {
    icon: 'speakWarn',
    okText: 'Yes',
    cancelText: 'No',
  },
  onboardingWooError: {
    icon: 'speakWarn',
    okText: 'OK',
    closeOnClick: true,
  },
  categoryUpdated: {
    icon: 'folder',
    title: 'Service Categories Updated',
    description:
      'The service categories that you help customers with has recently been updated by the administrators.',
    okText: 'Close',
    closeOnClick: true,
  },
  storeUpdated: {
    icon: 'folder',
    title: 'Store List Updated',
    description:
      'The stores that you help customers with has recently been updated by the administrators.',
    okText: 'Close',
    closeOnClick: true,
  },
};
