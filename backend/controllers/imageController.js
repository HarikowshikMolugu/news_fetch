const Image = require('../models/Image');

exports.getAllImages = async (req, res) => {
  try {
    const images = await Image.findAll();
    res.json(images);
  } catch (error) {
    console.error('Error retrieving images:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.getImageById = async (req, res) => {
  const { id } = req.params;

  try {
    const image = await Image.findByPk(id);
    if (!image) {
      return res.status(404).json({ error: 'Image not found' });
    }
    res.json(image);
  } catch (error) {
    console.error('Error retrieving image details:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
