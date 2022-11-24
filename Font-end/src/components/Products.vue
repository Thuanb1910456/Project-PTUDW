<template>
  <div>
    <div v-if="this.userStore.user._id != null">
      <div>
        <div class="mx-auto d-flex w-50"><input class="form-control" type="search"
            placeholder="Nhập tên sản phẩm cần tìm" aria-label="Search">
          <button class="btn btn-outline-success"><i class="fa-solid fa-magnifying-glass"></i></button>
        </div>
      </div>
      <div class="justify-content-between d-flex">
        <h2>Danh sách sản phẩm</h2>
        <div>
          <button type="button" class="btn btn-success mx-2" data-bs-toggle="modal" data-bs-target="#e">Thêm sản phẩm <i
              class="fa-solid fa-square-plus"></i>
          </button>
        </div>
      </div>
      <table class="table table-light align-middle text-center">
        <thead>
          <tr>
            <th>STT</th>
            <th>Tên sản phẩm</th>
            <th>Hình ảnh</th>
            <th>Loại</th>
            <th>Giá</th>
            <th>Chỉnh sữa</th>
          </tr>
        </thead>
        <tbody v-if="this.products.data != null">
          <tr v-for="(item, index) in this.products.data.products" :key="index">
            <th scope="row">{{ index }}</th>
            <td>{{ item.name }}</td>
            <td><img :src="'./src/assets/images/' + item.image" width="150" /></td>
            <td>{{ item.class.name }}</td>
            <td>{{ item.price }}</td>
            <td>
              <div>
                <button type="button" class="btn btn-primary mx-2" data-bs-toggle="modal" data-bs-target="#e"
                  @click="this.data = item"><i class="fa-solid fa-pen-to-square"></i></button>
                <button type="button" class="btn btn-danger mx-2" @click="this.delete(item._id)"><i
                    class="fa-solid fa-trash-can"></i></button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="modal fade" id="e" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Products information
              </h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="recipient-name" className="col-form-label">
                    Name
                  </label>
                  <input v-model="this.data.name" type="text" className="form-control" id="recipient-name"
                    name="name" />
                </div>
                <div className="mb-3">
                  <label htmlFor="recipient-name" className="col-form-label">
                    Price
                  </label>
                  <input v-model="this.data.price" type="number" className="form-control" id="recipient-name"
                    name="price" />
                </div>
                <div className="mb-3">
                  <label htmlFor="recipient-name" className="col-form-label">
                    Hình ảnh
                  </label>
                  <input type="file" name="image" class="form-control rounded-0" @change="this.changeFile"
                    id="recipient-name" placeholder="">
                </div>
                <div className="mb-3">
                  <label htmlFor="recipient-name" className="col-form-label">
                    Thể loại
                  </label>
                  <select class="form-select" aria-label="Default select example" v-model="this.data.class">
                    <option value="636614dc488332706c53ca5a">Betta</option>
                    <option value="636614f6488332706c53ca5b">Tôm</option>
                    <option value="6366158e488332706c53ca5d">cá koi</option>
                    <option value="636615ac488332706c53ca5e">Cá lóc</option>
                    <option value="63661645488332706c53ca63">Cá vàng</option>
                    <option value="6366169f488332706c53ca64">Cá rồng</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label htmlFor="recipient-name" className="col-form-label">
                    Mô tả
                  </label>
                  <input v-model="this.data.describle" type="text" className="form-control" id="recipient-name"
                    name="describle" />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" class="btn btn-secondary rounded-0" data-bs-dismiss="modal">Close</button>
              <button v-if="this.data._id != null" type="button" class="btn btn-primary  rounded-0"
                data-bs-dismiss="modal" @click="update(this.data._id)">Cập nhật</button>
              <button v-else type="button" class="btn btn-primary  rounded-0" data-bs-dismiss="modal"
                @click="create(this.data)">Thêm</button>
            </div>
          </div>
        </div>
      </div>
      
    </div>
    <div v-else>
      <video autoplay loop preload="auto" controls>
        <source src="../assets/images/demo.mp4">
      </video>
    </div>
    <div
        class="d-flex flex-column flex-md-row text-center text-md-start justify-content-center py-4 px-4 px-xl-5 bg-primary">
        <div class="text-white mb-3 mb-md-0">
          Copyright © 2022. Design by: Nguyễn Văn Minh Thuận.
        </div>
      </div>
  </div>
</template>

<script>
import ProductSerive from "@/service/products.js";
import { useUserStore } from "@/store/userStore.js";
export default {
  data() {
    const userStore = useUserStore();
    return {
      products: [],
      data: {},
      userStore,
    };
  },
  methods: {
    changeFile(e) {
      const file = e.target.value;
      this.data.image = file.slice(12);
      // console.log(this.data.image)
    },
    async get() {
      try {
        this.products = await ProductSerive.getAll();
        // console.log(this.products)
      } catch (error) {
        console.log(error);
      }
    },
    async delete(id) {
      if (confirm("Bạn muốn xóa sản phẩm này?")) {
        try {
          await ProductSerive.delete(id);
          this.get()
        } catch (error) {
        }
      }
    },
    async update(id) {
      if (confirm("Bạn chắc chắn chưa?")) {
        try {
          await ProductSerive.update(id,this.data);
          this.get()
        } catch (error) {
          console.log(error)
        }
      }
    },
    async create(data) {
      if (confirm("Bạn chắc chắn chưa?")) {
        try {
          await ProductSerive.create(data);
          this.get()
        } catch (error) {
          console.log(error)
        }
      }
    }
  },

  created() {
    this.get()
  }

}
</script>

<style>
video{
  width: 100%;
  height: 100%;
}
h2 {

  text-align: center;
  color: crimson;
  font-weight: bold;
  margin: 10px;
}
</style>