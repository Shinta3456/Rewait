const db = require('../models');
const User = db.users;

//create: untuk menambahkan data user ke dalam tabel user
exports.create = async (req, res) => {
  try {
      const user = {
          email: req.body.email,
          username: req.body.username,
          password: req.body.password,
          confirm_password: req.body.confirm_password
      };
      const data = await db.users.create(user);
      res.json({
          message: "User berhasil dibuat",
          data: data,
      });
  } catch (error) {
      res.status(500).json({
          message: "Terjadi kesalahan saat membuat user",
          data: null,
      });
  }
};
  

// Fungsi untuk menampilkan semua User dari database
exports.findAll = (req, res) => {
  User.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Terjadi kesalahan saat mengambil data User."
      });
    });
};

// Fungsi untuk menampilkan User dengan id tertentu
exports.findOne = (req, res) => {
  const id = req.params.id;

  User.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error ketika mengambil data User dengan id=" + id
      });
    });
};

// Fungsi untuk mengupdate User dengan id tertentu
exports.update = (req, res) => {
  const id = req.params.id;

  User.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "User berhasil diupdate."
        });
      } else {
        res.send({
          message: `Tidak dapat mengupdate User dengan id=${id}. Mungkin User tidak ditemukan atau request kosong.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error ketika mengupdate User dengan id=" + id
      });
    });
};

// Fungsi untuk menghapus User dengan id tertentu
exports.delete = (req, res) => {
  const id = req.params.id;

  User.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "User berhasil dihapus."
        });
      } else {
        res.send({
          message: `Tidak dapat menghapus User dengan id=${id}. Mungkin User tidak ditemukan.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error ketika menghapus User dengan id=" + id
      });
    });
};
