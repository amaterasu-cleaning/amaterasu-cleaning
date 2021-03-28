<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12"> 掃除報告</v-col>
      <v-col>
        <v-card>
          <v-checkbox
            v-for="item in items"
            :key="item.id"
            v-model="selected"
            :label="item.name"
            :value="item.name"
          >
          </v-checkbox>
          <v-card-actions
            ><v-btn @click="getItems">キャンセル</v-btn>
            <v-btn dark @click="updateItem">更新する</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { db } from "@/plugins/firebase";
export default {
  name: "HelloWorld",
  data: () => ({
    items: [
      { id: 1, name: "デカリビング", value: true },
      { id: 2, name: "デカキッチン", value: false },
      { id: 3, name: "チビリビング", value: false },
      { id: 4, name: "チビキッチン", value: false },
      { id: 5, name: "1階廊下", value: false },
      { id: 6, name: "トイレ（右）", value: false },
      { id: 7, name: "洗面所", value: false },

      { id: 10, name: "階段", value: false },
      { id: 11, name: "2階廊下", value: false },
      { id: 12, name: "男子トイレ", value: false },
      { id: 13, name: "女子トイレ", value: false },
      { id: 14, name: "シャワールーム（奥）", value: false },
      { id: 15, name: "シャワールーム（手前）", value: false },

      { id: 16, name: "鏡の間", value: false },
      { id: 18, name: "玄関", value: false },
      { id: 19, name: "駐輪場", value: false },
      { id: 20, name: "デッキ", value: false },
      { id: 21, name: "物干し場", value: false },
    ],
    selected: [],
  }),
  created: function () {
    this.getItems();
  },
  methods: {
    updateItem: function () {
      console.log("called");
      console.log(this.selected);
      db.collection("cleans")
        .doc("9lTWoJ8KOLAF5dojz6WX")
        .update({ selected: this.selected });
    },
    getItems: function () {
      var docRef = db.collection("cleans").doc("9lTWoJ8KOLAF5dojz6WX");

      docRef
        .get()
        .then((doc) => {
          if (doc.exists) {
            console.log("Document data:", doc.data());
            this.selected = doc.data().selected;
          } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
          }
        })
        .catch((error) => {
          console.log("Error getting document:", error);
        });
    },
  },
};
</script>
