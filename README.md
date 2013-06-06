requirejsSample
===============

### require.jsとは

require.jsは、複数のJavaScriptファイルの依存関係を明示的に指定し、  
非同期でファイルを読み込む仕組みを提供するライブラリです。  

また、依存関係を明示的に指定する仕組みによって、  
JavaScriptファイルをモジュールごとに分割することができることも  
特徴の一つとなっています。  
  
このモジュール化によって、読み込むJavaScriptファイルの数が増えるという  
問題もありますが、require.jsとともに配布されているr.jsを使用することで、  
依存関係になっているJavaScriptファイルを1つのminified版として、  
ビルドすることもできます。

require.jsとr.jsを使うには、以下のコマンドを実行してください。

```
npm install -g requirejs
```



#### 1. 環境準備

##### #事前にnode.js & npmをインストールしておくこと

1. リポジトリをクローンする

```
git clone git@github.com:taise/requirejsSample.git
```
2. nodeの依存モジュールをインストールする

```
cd requirejsSample && npm install
```

3. サーバを起動する(localhost:3000)

```
node app
```

#### 2. require.jsを使う

1. 依存関係を記載するmain.jsを準備する

  require.jsは、任意のファイルに各種ライブラリの依存関係を記載します。  
  このプロジェクトでは"public/js/main.js"がこれにあたります。  

  依存関係だけでなく、読み込みのベースとなるディレクトリや、  
  グローバル変数の指定などもできます。  
  (jQueryであれば"$"をグローバル変数として使いたいはずです。)

  main.jsの最後で以下のように記載してJavaScriptの処理を実行します。


```
  require([依存ライブラリ名], function(ライブラリに対応する変数名){
    /*  実行したい処理 */
  })
```


2. 各モジュールに依存するライブラリを指定する

  自分で開発したモジュールをrequire.jsで読み込みたい場合は、  
  main.jsで呼び出すか、main.jsに呼び出されるモジュール内で依存ライブラリとして登録します。
  
  前者の場合は上記のrequire()で依存ライブラリに指定します。 
  
  後者の場合は、以下のようにdefine()を使って依存ライブラリに指定します。
  このプロジェクトでは"public/js/modules/alerts.js"がこれにあたります。

　また、外部から呼び出したい関数やオブジェクトについては、ファイルの最後に  
  returnを使って返してあげます。
  
```
  define([依存ライブラリ名], function(ライブラリに対応する変数名){
    
    var publicFunction = function(){
      /* 実行したい処理 */
    }
    
    return {
      // 外部から呼び出す関数やオブジェクトを定義する
      "publicFunction": "publicFunction"
    }
  })
```

3. HTMLにスクリプトを登録する

  HTMLへの登録は、require.jsのみをscriptタグで指定します。
  require.jsで読み込む依存関係記載ファイル(main.js)を"data-main"属性で指定します。
  
  これでrequire.jsによってJavaScriptファイルが非同期で呼び出されます。
  
  
　細かい設定などについては、公式サイトを参照してください。


#### 3. r.jsを使う

1. ビルド設定ファイル(build.js)を作成する

  npmを使ってrequire.jsをインストールしている場合、コマンドラインで"r.js"を使うことができます。
  minified版を作るには、r.jsの実行時にコマンドラインオプションを指定する方法と  
  ビルド設定ファイル(build.js)を作成する方法と、二種類あります。

  ビルド設定ファイルでは、ベースとなるディレクトリや、require.jsで利用する  
  依存関係記載ファイル(main.js)や出力ファイル名などを指定します。
  このプロジェクトでは、"public/build.js"にあたります。

2. r.jsを実行する

  ビルド設定ファイルを使ったminified版作成には、以下のコマンドを実行します。
  
```
cd public
r.js -o build.js
```

  こちらについても、詳細な設定については公式サイトを参照してください。
  
