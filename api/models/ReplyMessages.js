module.exports = (sequelize, DataTypes) => {
  const ReplyMessages = sequelize.define('ReplyMessages', {
    contents: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    type: {
      type: DataTypes.ENUM,
      allowNull: false,
      values: ['text', 'image', 'video', 'audio', 'location', 'sticker', 'imagemap', 'template'],
      set(value) {
        this.setDataValue('type', value.toLowerCase());
      },
    },
  });

  return ReplyMessages;
};
