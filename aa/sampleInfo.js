/**
 * Created by charry on 2018/4/2.
 */
sampletable1(sampleId, userId);
function sampletable1(sampleId, userId) {
  $('#sampleTable1').bootstrapTable({
    // url: 'data.json',
    pagination: true,
    //每页的记录行数（*）
    pageSize: 10,
    //可供选择的每页的行数（*）
    pageList: [10, 25, 50, 100],
    // sortable: true,
    data: sample1,
    rowStyle: function (row, index) {
      //这里有5个取值代表5中颜色['active', 'success', 'info', 'warning', 'danger'];
      return { classes: 'success' };
    },
    columns: [
      {
        field: 'Nucleic_acid_sequence',
        title: '核酸序列总数',
      },
      {
        field: 'Human_sequence',
        title: '人源序列数',
      },
      {
        field: 'Microbial_sequence',
        title: '微生物序列数',
      },
      {
        field: 'The_ratio_of_microbial_sequences',
        title: '微生物序列占比',
      },
      {
        field: 'Bacteria',
        title: '细菌 检出序列数',
      },
      {
        field: 'Fungi',
        title: '病毒 检出序列数',
      },
      {
        field: 'Virus',
        title: '真菌 检出序列数 ',
      },
    ],
  });
}
sampletable2(sampleId, userId);
function sampletable2(sampleId, userId) {
  $('#sampleTable2').bootstrapTable({
    // url:
    //   '/mNGSReports/sampletable2?userId=' + userId + '&&sampleId=' + sampleId,
    data: sample2,
    pagination: true,
    //每页的记录行数（*）
    pageSize: 10,
    //可供选择的每页的行数（*）
    pageList: [10, 25, 50, 100],

    sortable: true,
    rowStyle: function (row, index) {
      //这里有5个取值代表5中颜色['active', 'success', 'info', 'warning', 'danger'];
      return { classes: 'success' };
    },
    columns: [
      {
        field: 'chineseName',
        title: '中文名',
      },
      {
        field: 'LatinName',
        title: '拉丁文名',
      },
      {
        field: 'DetectableNo',
        title: '检出序列数',
      },
      {
        field: 'relative_content',
        title: '相对含量',
      },
      {
        field: 'Sequencing_depth',
        title: '测序深度',
      },
      {
        field: 'Resistance_gene_number',
        title: '耐药基因数',
      },
      {
        field: 'Drug_resistance',
        title: '耐药性',
      },
      {
        field: 'Virulence_gene_No',
        title: '毒力基因数',
      },
      {
        field: 'Virulence_gene',
        title: '毒力基因',
      },
    ],
  });
}
sampletable3(sampleId, userId);
function sampletable3(sampleId, userId) {
  $('#sampleTable3').bootstrapTable({
    data: sample3,
    pagination: true,
    //每页的记录行数（*）
    pageSize: 10,
    //可供选择的每页的行数（*）
    pageList: [10, 25, 50, 100],
    sortable: true,
    rowStyle: function (row, index) {
      //这里有5个取值代表5中颜色['active', 'success', 'info', 'warning', 'danger'];
      return { classes: 'success' };
    },
    columns: [
      {
        field: 'chineseName',
        title: '中文名',
      },
      {
        field: 'LatinName',
        title: '拉丁文名',
      },
      {
        field: 'DetectableNo',
        title: '检出序列数',
      },
      {
        field: 'relative_content',
        title: '相对含量',
      },
      {
        field: 'Sequencing_depth',
        title: '测序深度',
      },
      {
        field: 'Resistance_gene_number',
        title: '耐药基因数',
      },
      {
        field: 'Drug_resistance',
        title: '耐药性',
      },
      {
        field: 'Virulence_gene_No',
        title: '毒力基因数',
      },
      {
        field: 'Virulence_gene',
        title: '毒力基因',
      },
    ],
  });
}
sampletable4(sampleId, userId);
function sampletable4(sampleId, userId) {
  $('#sampleTable4').bootstrapTable({
    data: sample4,
    pagination: true,
    //每页的记录行数（*）
    pageSize: 10,
    //可供选择的每页的行数（*）
    pageList: [10, 25, 50, 100],
    sortable: true,
    striped: true,
    rowStyle: function (row, index) {
      //这里有5个取值代表5中颜色['active', 'success', 'info', 'warning', 'danger'];
      return { classes: 'success' };
    },
    columns: [
      {
        field: 'chineseName',
        title: '中文名',
      },
      {
        field: 'LatinName',
        title: '拉丁文名',
      },
      {
        field: 'DetectableNo',
        title: '检出序列数',
      },
      {
        field: 'relative_content',
        title: '相对含量',
      },
      {
        field: 'Sequencing_depth',
        title: '测序深度',
      },
      {
        field: 'Resistance_gene_number',
        title: '耐药基因数',
      },
      {
        field: 'Drug_resistance',
        title: '耐药性',
      },
      {
        field: 'Virulence_gene_No',
        title: '毒力基因数',
      },
      {
        field: 'Virulence_gene',
        title: '毒力基因',
      },
    ],
  });
}
sampletable5(sampleId, userId);
function sampletable5(sampleId, userId) {
  $('#sampleTable5').bootstrapTable({
    data: sample5,
    pagination: true,
    //每页的记录行数（*）
    pageSize: 10,
    //可供选择的每页的行数（*）
    pageList: [10, 25, 50, 100],
    sortable: true,
    rowStyle: function (row, index) {
      //这里有5个取值代表5中颜色['active', 'success', 'info', 'warning', 'danger'];
      return { classes: 'success' };
    },
    columns: [
      {
        field: 'chineseName',
        title: '中文名',
      },
      {
        field: 'LatinName',
        title: '拉丁文名',
      },
      {
        field: 'DetectableNo',
        title: '检出序列数',
      },
      {
        field: 'relative_content',
        title: '相对含量',
      },
      {
        field: 'Sequencing_depth',
        title: '测序深度',
      },
      {
        field: 'Resistance_gene_number',
        title: '耐药基因数',
      },
      {
        field: 'Drug_resistance',
        title: '耐药性',
      },
      {
        field: 'Virulence_gene_No',
        title: '毒力基因数',
      },
      {
        field: 'Virulence_gene',
        title: '毒力基因',
      },
    ],
  });
}
sampletable6(sampleId, userId);
function sampletable6(sampleId, userId) {
  $('#sampleTable6').bootstrapTable({
    data: sample6,
    pagination: true,
    //每页的记录行数（*）
    pageSize: 10,
    //可供选择的每页的行数（*）
    pageList: [10, 25, 50, 100],
    sortable: true,
    rowStyle: function (row, index) {
      //这里有5个取值代表5中颜色['active', 'success', 'info', 'warning', 'danger'];
      return { classes: 'success' };
    },
    columns: [
      {
        field: 'chineseName',
        title: '中文名',
      },
      {
        field: 'LatinName',
        title: '拉丁文名',
      },
      {
        field: 'PathogenicInfo',
        title: '致病信息',
      },
    ],
  });
}
