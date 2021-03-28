<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12"> 掃除報告ー </v-col>
      <v-col cols="12">
        <v-treeview
          selectable
          selected-color="red"
          :items="items"
          open-all
        ></v-treeview>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12"> <v-btn dark>掃除したよー</v-btn> </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "HelloWorld",
  data: () => ({
    items: [
      {
        id: 1,
        name: "1階",
        children: [
          { id: 2, name: "デカリビング" },
          { id: 3, name: "デカキッチン" },
          { id: 4, name: "チビリビング" },
          { id: 5, name: "チビキッチン" },
          { id: 6, name: "廊下" },
          { id: 7, name: "トイレ（右）" },
          { id: 8, name: "洗面所" },
        ],
      },
      {
        id: 9,
        name: "2階",
        children: [
          { id: 10, name: "階段" },
          { id: 11, name: "廊下" },
          { id: 12, name: "男子トイレ" },
          { id: 13, name: "女子トイレ" },
          { id: 14, name: "シャワールーム（奥）" },
          { id: 15, name: "シャワールーム（手前）" },
          { id: 16, name: "鏡の間" },
        ],
      },
      {
        id: 17,
        name: "その他",
        children: [
          { id: 18, name: "玄関" },
          { id: 19, name: "駐輪場" },
          { id: 20, name: "デッキ" },
          { id: 21, name: "物干し場" },
        ],
      },
    ],
  }),
};
</script>
