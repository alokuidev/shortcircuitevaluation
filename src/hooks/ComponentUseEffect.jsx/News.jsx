import './News.css';

export const News = () =>{
    return(
        <>
          <div className="news-container">
    <div className="news-card">
      <div className="news-header">
        <span className="user-id">User ID: 1</span>
        <span className="news-id">ID: 101</span>
      </div>
      <h3 className="news-title">Breaking News: Flexbox Simplifies Layouts</h3>
      <p className="news-desc">
        Flexbox is a powerful layout tool that makes it easier to design responsive layouts...
      </p>
    </div>

    <div className="news-card">
      <div className="news-header">
        <span className="user-id">User ID: 2</span>
        <span className="news-id">ID: 102</span>
      </div>
      <h3 className="news-title">CSS Tricks: Writing Cleaner Code</h3>
      <p className="news-desc">
        Writing cleaner CSS code involves using modular approaches, keeping classes reusable, and reducing redundancy...
      </p>
    </div>

    <div className="news-card">
      <div className="news-header">
        <span className="user-id">User ID: 3</span>
        <span className="news-id">ID: 103</span>
      </div>
      <h3 className="news-title">HTML Best Practices</h3>
      <p className="news-desc">
        Structuring HTML with semantic elements is essential for accessibility and better SEO rankings...
      </p>
    </div>

    <div className="news-card">
      <div className="news-header">
        <span className="user-id">User ID: 4</span>
        <span className="news-id">ID: 104</span>
      </div>
      <h3 className="news-title">JavaScript Updates: New Features</h3>
      <p className="news-desc">
        JavaScript continues to evolve with new features being added each year, making development faster and more efficient...
      </p>
    </div>

    <div className="news-card">
      <div className="news-header">
        <span className="user-id">User ID: 5</span>
        <span className="news-id">ID: 105</span>
      </div>
      <h3 className="news-title">CSS Grid vs Flexbox</h3>
      <p className="news-desc">
        Both CSS Grid and Flexbox have their unique strengths, but knowing when to use each can make a huge difference in your layouts...
      </p>
    </div>

    <div className="news-card">
      <div className="news-header">
        <span className="user-id">User ID: 6</span>
        <span className="news-id">ID: 106</span>
      </div>
      <h3 className="news-title">Responsive Web Design Tips</h3>
      <p className="news-desc">
        Responsive design is key to ensuring a great user experience across devices, from desktop to mobile...
      </p>
    </div>
  </div>
        </>
    )
}

